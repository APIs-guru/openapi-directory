import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FetchBoundaryByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=boundaryId" })
  boundaryId: string;
}


export class FetchBoundaryByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}


export class FetchBoundaryByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FetchBoundaryByIdPathParams;

  @SpeakeasyMetadata()
  security: FetchBoundaryByIdSecurity;
}


export class FetchBoundaryByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  boundary?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
