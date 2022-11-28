import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostBehaviorsRequestBodyAttachmentFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=attachment_file" })
  attachmentFile: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class PostBehaviorsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  attachmentFile?: PostBehaviorsRequestBodyAttachmentFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=behavior" })
  behavior: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=value" })
  value?: string;
}


export class PostBehaviorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostBehaviorsRequestBody;
}


export class PostBehaviorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  behaviorEntity?: shared.BehaviorEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
