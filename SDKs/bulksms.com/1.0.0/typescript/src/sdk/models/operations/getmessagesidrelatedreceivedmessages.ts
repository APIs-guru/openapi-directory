import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessagesIdRelatedReceivedMessagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMessagesIdRelatedReceivedMessagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetMessagesIdRelatedReceivedMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMessagesIdRelatedReceivedMessagesPathParams;

  @SpeakeasyMetadata()
  security: GetMessagesIdRelatedReceivedMessagesSecurity;
}


export class GetMessagesIdRelatedReceivedMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata({ elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata()
  statusCode: number;
}
