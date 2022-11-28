import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMessagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMessagesIdPathParams;
}


export class GetMessagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  message?: shared.Message;

  @SpeakeasyMetadata()
  statusCode: number;
}
