import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJoinDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class GetJoinDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetJoinDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJoinDetailsPathParams;

  @SpeakeasyMetadata()
  security: GetJoinDetailsSecurity;
}


export class GetJoinDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversationDetails?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
