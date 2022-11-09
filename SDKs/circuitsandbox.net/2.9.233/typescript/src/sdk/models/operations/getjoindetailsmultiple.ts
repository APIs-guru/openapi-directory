import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJoinDetailsMultipleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=convIds" })
  convIds: string[];
}


export class GetJoinDetailsMultipleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetJoinDetailsMultipleRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetJoinDetailsMultipleQueryParams;

  @Metadata()
  security: GetJoinDetailsMultipleSecurity;
}


export class GetJoinDetailsMultipleResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversationDetails?: any[];

  @Metadata()
  statusCode: number;
}
