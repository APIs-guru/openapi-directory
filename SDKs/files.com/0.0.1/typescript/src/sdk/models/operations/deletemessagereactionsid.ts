import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteMessageReactionsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteMessageReactionsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMessageReactionsIdPathParams;
}


export class DeleteMessageReactionsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
