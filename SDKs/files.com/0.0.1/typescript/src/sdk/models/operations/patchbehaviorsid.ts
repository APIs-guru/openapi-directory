import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchBehaviorsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchBehaviorsIdRequestBodyAttachmentFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=attachment_file" })
  attachmentFile: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}


export class PatchBehaviorsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  attachmentFile?: PatchBehaviorsIdRequestBodyAttachmentFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=behavior" })
  behavior?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=value" })
  value?: string;
}


export class PatchBehaviorsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchBehaviorsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchBehaviorsIdRequestBody;
}


export class PatchBehaviorsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  behaviorEntity?: shared.BehaviorEntity;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
