import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CancelSpaceSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchId" })
  searchId: string;
}


export class CancelSpaceSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CancelSpaceSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelSpaceSearchPathParams;

  @SpeakeasyMetadata()
  security: CancelSpaceSearchSecurity;
}


export class CancelSpaceSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
