import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentsSource } from "./attachmentssource";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { DocumentRequires } from "./documentrequires";
import { Tag } from "./tag";



export class CreateDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attachments", elemType: AttachmentsSource })
  attachments?: AttachmentsSource[];

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentFormat" })
  documentFormat?: DocumentFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=DocumentType" })
  documentType?: DocumentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Requires", elemType: DocumentRequires })
  requires?: DocumentRequires[];

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionName" })
  versionName?: string;
}
