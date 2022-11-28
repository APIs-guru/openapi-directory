import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";



export class AddAttachmentsToSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentSetId" })
  attachmentSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: Attachment })
  attachments: Attachment[];
}
