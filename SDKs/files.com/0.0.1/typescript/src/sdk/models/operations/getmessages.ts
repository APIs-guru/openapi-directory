import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMessagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMessagesQueryParams;
}


export class GetMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MessageEntity })
  messageEntities?: shared.MessageEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
