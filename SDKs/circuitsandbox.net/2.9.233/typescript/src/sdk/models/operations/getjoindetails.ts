import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetJoinDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class GetJoinDetailsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetJoinDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJoinDetailsPathParams;

  @Metadata()
  security: GetJoinDetailsSecurity;
}


export class GetJoinDetailsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversationDetails?: any;

  @Metadata()
  statusCode: number;
}
