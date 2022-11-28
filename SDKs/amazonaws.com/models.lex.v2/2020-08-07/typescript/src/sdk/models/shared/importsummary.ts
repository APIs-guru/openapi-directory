import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";



// ImportSummary
/** 
 * Provides summary information about an import in an import list.
**/
export class ImportSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=importId" })
  importId?: string;

  @SpeakeasyMetadata({ data: "json, name=importStatus" })
  importStatus?: ImportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=importedResourceId" })
  importedResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=importedResourceName" })
  importedResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=mergeStrategy" })
  mergeStrategy?: MergeStrategyEnum;
}
