import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachmentsSource } from "./attachmentssource";
import { DocumentFormatEnum } from "./documentformatenum";


export class UpdateDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attachments", elemType: shared.AttachmentsSource })
  attachments?: AttachmentsSource[];

  @Metadata({ data: "json, name=Content" })
  content: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=DocumentFormat" })
  documentFormat?: DocumentFormatEnum;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=TargetType" })
  targetType?: string;

  @Metadata({ data: "json, name=VersionName" })
  versionName?: string;
}
