import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachmentInformation } from "./attachmentinformation";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { DocumentHashTypeEnum } from "./documenthashtypeenum";
import { DocumentParameter } from "./documentparameter";
import { PlatformTypeEnum } from "./platformtypeenum";
import { DocumentRequires } from "./documentrequires";
import { ReviewInformation } from "./reviewinformation";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { DocumentStatusEnum } from "./documentstatusenum";
import { Tag } from "./tag";


// DocumentDescription
/** 
 * Describes a Amazon Web Services Systems Manager document (SSM document). 
**/
export class DocumentDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApprovedVersion" })
  approvedVersion?: string;

  @Metadata({ data: "json, name=AttachmentsInformation", elemType: shared.AttachmentInformation })
  attachmentsInformation?: AttachmentInformation[];

  @Metadata({ data: "json, name=Author" })
  author?: string;

  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DefaultVersion" })
  defaultVersion?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=DocumentFormat" })
  documentFormat?: DocumentFormatEnum;

  @Metadata({ data: "json, name=DocumentType" })
  documentType?: DocumentTypeEnum;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=Hash" })
  hash?: string;

  @Metadata({ data: "json, name=HashType" })
  hashType?: DocumentHashTypeEnum;

  @Metadata({ data: "json, name=LatestVersion" })
  latestVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=Parameters", elemType: shared.DocumentParameter })
  parameters?: DocumentParameter[];

  @Metadata({ data: "json, name=PendingReviewVersion" })
  pendingReviewVersion?: string;

  @Metadata({ data: "json, name=PlatformTypes" })
  platformTypes?: PlatformTypeEnum[];

  @Metadata({ data: "json, name=Requires", elemType: shared.DocumentRequires })
  requires?: DocumentRequires[];

  @Metadata({ data: "json, name=ReviewInformation", elemType: shared.ReviewInformation })
  reviewInformation?: ReviewInformation[];

  @Metadata({ data: "json, name=ReviewStatus" })
  reviewStatus?: ReviewStatusEnum;

  @Metadata({ data: "json, name=SchemaVersion" })
  schemaVersion?: string;

  @Metadata({ data: "json, name=Sha1" })
  sha1?: string;

  @Metadata({ data: "json, name=Status" })
  status?: DocumentStatusEnum;

  @Metadata({ data: "json, name=StatusInformation" })
  statusInformation?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TargetType" })
  targetType?: string;

  @Metadata({ data: "json, name=VersionName" })
  versionName?: string;
}
