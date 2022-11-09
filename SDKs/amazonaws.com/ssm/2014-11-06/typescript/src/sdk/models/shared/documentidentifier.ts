import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Author" })
  author?: string;

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

  @Metadata({ data: "json, name=Owner" })
  owner?: string;

  @Metadata({ data: "json, name=PlatformTypes" })
  platformTypes?: PlatformTypeEnum[];

  @Metadata({ data: "json, name=Requires", elemType: shared.DocumentRequires })
  requires?: DocumentRequires[];

  @Metadata({ data: "json, name=ReviewStatus" })
  reviewStatus?: ReviewStatusEnum;

  @Metadata({ data: "json, name=SchemaVersion" })
  schemaVersion?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TargetType" })
  targetType?: string;

  @Metadata({ data: "json, name=VersionName" })
  versionName?: string;
}
