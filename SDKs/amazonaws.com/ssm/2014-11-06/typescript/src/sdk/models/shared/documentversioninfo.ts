import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentFormatEnum } from "./documentformatenum";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { DocumentStatusEnum } from "./documentstatusenum";


// DocumentVersionInfo
/** 
 * Version information about the document.
**/
export class DocumentVersionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=DocumentFormat" })
  documentFormat?: DocumentFormatEnum;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=IsDefaultVersion" })
  isDefaultVersion?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ReviewStatus" })
  reviewStatus?: ReviewStatusEnum;

  @Metadata({ data: "json, name=Status" })
  status?: DocumentStatusEnum;

  @Metadata({ data: "json, name=StatusInformation" })
  statusInformation?: string;

  @Metadata({ data: "json, name=VersionName" })
  versionName?: string;
}
