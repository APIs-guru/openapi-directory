import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachmentsSource } from "./attachmentssource";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { DocumentRequires } from "./documentrequires";
import { Tag } from "./tag";


export class CreateDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attachments", elemType: shared.AttachmentsSource })
  attachments?: AttachmentsSource[];

  @Metadata({ data: "json, name=Content" })
  content: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=DocumentFormat" })
  documentFormat?: DocumentFormatEnum;

  @Metadata({ data: "json, name=DocumentType" })
  documentType?: DocumentTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Requires", elemType: shared.DocumentRequires })
  requires?: DocumentRequires[];

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TargetType" })
  targetType?: string;

  @Metadata({ data: "json, name=VersionName" })
  versionName?: string;
}
