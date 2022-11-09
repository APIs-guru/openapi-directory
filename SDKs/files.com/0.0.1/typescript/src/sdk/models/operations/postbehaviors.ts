import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostBehaviorsRequestBodyAttachmentFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=attachment_file" })
  attachmentFile: string;

  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class PostBehaviorsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  attachmentFile?: PostBehaviorsRequestBodyAttachmentFile;

  @Metadata({ data: "multipart_form, name=behavior" })
  behavior: string;

  @Metadata({ data: "multipart_form, name=path" })
  path: string;

  @Metadata({ data: "multipart_form, name=value" })
  value?: string;
}


export class PostBehaviorsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostBehaviorsRequestBody;
}


export class PostBehaviorsResponse extends SpeakeasyBase {
  @Metadata()
  behaviorEntity?: shared.BehaviorEntity;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
