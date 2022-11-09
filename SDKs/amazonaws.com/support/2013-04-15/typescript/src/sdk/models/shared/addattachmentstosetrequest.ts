import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attachment } from "./attachment";


export class AddAttachmentsToSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentSetId" })
  attachmentSetId?: string;

  @Metadata({ data: "json, name=attachments", elemType: shared.Attachment })
  attachments: Attachment[];
}
