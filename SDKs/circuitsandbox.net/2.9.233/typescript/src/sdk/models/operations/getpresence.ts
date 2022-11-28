import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPresenceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIds" })
  userIds: string[];
}


export class GetPresenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPresenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPresenceQueryParams;

  @SpeakeasyMetadata()
  security: GetPresenceSecurity;
}


export class GetPresenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  presences?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
