import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachmentContent } from "./attachmentcontent";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { DocumentRequires } from "./documentrequires";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { DocumentStatusEnum } from "./documentstatusenum";


export class GetDocumentResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachmentsContent", elemType: shared.AttachmentContent })
  attachmentsContent?: AttachmentContent[];

  @Metadata({ data: "json, name=Content" })
  content?: string;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=DocumentFormat" })
  documentFormat?: DocumentFormatEnum;

  @Metadata({ data: "json, name=DocumentType" })
  documentType?: DocumentTypeEnum;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Requires", elemType: shared.DocumentRequires })
  requires?: DocumentRequires[];

  @Metadata({ data: "json, name=ReviewStatus" })
  reviewStatus?: ReviewStatusEnum;

  @Metadata({ data: "json, name=Status" })
  status?: DocumentStatusEnum;

  @Metadata({ data: "json, name=StatusInformation" })
  statusInformation?: string;

  @Metadata({ data: "json, name=VersionName" })
  versionName?: string;
}
