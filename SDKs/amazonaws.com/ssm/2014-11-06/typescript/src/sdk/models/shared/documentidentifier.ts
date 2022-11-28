import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { PlatformTypeEnum } from "./platformtypeenum";
import { DocumentRequires } from "./documentrequires";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { Tag } from "./tag";



// DocumentIdentifier
/** 
 * Describes the name of a SSM document.
**/
export class DocumentIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Author" })
  author?: string;

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

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=PlatformTypes" })
  platformTypes?: PlatformTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=Requires", elemType: DocumentRequires })
  requires?: DocumentRequires[];

  @SpeakeasyMetadata({ data: "json, name=ReviewStatus" })
  reviewStatus?: ReviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SchemaVersion" })
  schemaVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TargetType" })
  targetType?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionName" })
  versionName?: string;
}
