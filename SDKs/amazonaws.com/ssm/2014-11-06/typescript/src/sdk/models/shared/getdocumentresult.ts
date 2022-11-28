import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentContent } from "./attachmentcontent";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { DocumentRequires } from "./documentrequires";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { DocumentStatusEnum } from "./documentstatusenum";



export class GetDocumentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachmentsContent", elemType: AttachmentContent })
  attachmentsContent?: AttachmentContent[];

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentFormat" })
  documentFormat?: DocumentFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=DocumentType" })
  documentType?: DocumentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Requires", elemType: DocumentRequires })
  requires?: DocumentRequires[];

  @SpeakeasyMetadata({ data: "json, name=ReviewStatus" })
  reviewStatus?: ReviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DocumentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusInformation" })
  statusInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionName" })
  versionName?: string;
}
