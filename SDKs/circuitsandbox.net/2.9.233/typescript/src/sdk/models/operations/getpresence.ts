import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPresenceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userIds" })
  userIds: string[];
}


export class GetPresenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetPresenceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPresenceQueryParams;

  @Metadata()
  security: GetPresenceSecurity;
}


export class GetPresenceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  presences?: any[];

  @Metadata()
  statusCode: number;
}
