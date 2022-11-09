import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchBehaviorsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchBehaviorsIdRequestBodyAttachmentFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=attachment_file" })
  attachmentFile: string;

  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class PatchBehaviorsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  attachmentFile?: PatchBehaviorsIdRequestBodyAttachmentFile;

  @Metadata({ data: "multipart_form, name=behavior" })
  behavior?: string;

  @Metadata({ data: "multipart_form, name=path" })
  path?: string;

  @Metadata({ data: "multipart_form, name=value" })
  value?: string;
}


export class PatchBehaviorsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchBehaviorsIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchBehaviorsIdRequestBody;
}


export class PatchBehaviorsIdResponse extends SpeakeasyBase {
  @Metadata()
  behaviorEntity?: shared.BehaviorEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
