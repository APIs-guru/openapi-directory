import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMessagesIdRelatedReceivedMessagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMessagesIdRelatedReceivedMessagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetMessagesIdRelatedReceivedMessagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMessagesIdRelatedReceivedMessagesPathParams;

  @Metadata()
  security: GetMessagesIdRelatedReceivedMessagesSecurity;
}


export class GetMessagesIdRelatedReceivedMessagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata({ elemType: shared.Message })
  messages?: shared.Message[];

  @Metadata()
  statusCode: number;
}
