import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchMessagesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchMessagesIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=body" })
  body: string;

  @Metadata({ data: "multipart_form, name=project_id" })
  projectId: number;

  @Metadata({ data: "multipart_form, name=subject" })
  subject: string;
}


export class PatchMessagesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchMessagesIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PatchMessagesIdRequestBody;
}


export class PatchMessagesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageEntity?: shared.MessageEntity;

  @Metadata()
  statusCode: number;
}
