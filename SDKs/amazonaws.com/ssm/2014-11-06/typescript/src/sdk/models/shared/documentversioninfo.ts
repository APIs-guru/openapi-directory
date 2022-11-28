import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentFormatEnum } from "./documentformatenum";
import { ReviewStatusEnum } from "./reviewstatusenum";
import { DocumentStatusEnum } from "./documentstatusenum";



// DocumentVersionInfo
/** 
 * Version information about the document.
**/
export class DocumentVersionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentFormat" })
  documentFormat?: DocumentFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=IsDefaultVersion" })
  isDefaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ReviewStatus" })
  reviewStatus?: ReviewStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DocumentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusInformation" })
  statusInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=VersionName" })
  versionName?: string;
}
