import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchMessagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchMessagesIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=subject" })
  subject: string;
}


export class PatchMessagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchMessagesIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PatchMessagesIdRequestBody;
}


export class PatchMessagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageEntity?: shared.MessageEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
