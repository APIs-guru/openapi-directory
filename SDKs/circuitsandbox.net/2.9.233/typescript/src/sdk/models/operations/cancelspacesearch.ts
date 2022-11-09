import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CancelSpaceSearchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=searchId" })
  searchId: string;
}


export class CancelSpaceSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CancelSpaceSearchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelSpaceSearchPathParams;

  @Metadata()
  security: CancelSpaceSearchSecurity;
}


export class CancelSpaceSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
