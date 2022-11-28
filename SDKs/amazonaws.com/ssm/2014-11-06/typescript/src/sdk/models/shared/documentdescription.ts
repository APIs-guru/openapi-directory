import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ApprovedVersion" })
  approvedVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=AttachmentsInformation", elemType: AttachmentInformation })
  attachmentsInformation?: AttachmentInformation[];

  @SpeakeasyMetadata({ data: "json, name=Author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DefaultVersion" })
  defaultVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentFormat" })
  documentFormat?: DocumentFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=DocumentType" })
  documentType?: DocumentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=HashType" })
  hashType?: DocumentHashTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=LatestVersion" })
  latestVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: DocumentParameter })
  parameters?: DocumentParameter[];

  @SpeakeasyMetadata({ data: "json, name=PendingReviewVersion" })
  pendingReviewVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=PlatformTypes" })
  platformTypes?: PlatformTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Requires", elemType: DocumentRequires })
  requires?: DocumentRequires[];

  @SpeakeasyMetadata({ data: "json, name=ReviewInformation", elemType: ReviewInformation })
  reviewInformation?: ReviewInformation[];

  @SpeakeasyMetadata({ data: "json, name=ReviewStatus" })
  reviewStatus?: ReviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersion" })
  schemaVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Sha1" })
  sha1?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DocumentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusInformation" })
  statusInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionName" })
  versionName?: string;
}
