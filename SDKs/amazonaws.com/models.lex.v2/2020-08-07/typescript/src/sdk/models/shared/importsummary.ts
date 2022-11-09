import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";


// ImportSummary
/** 
 * Provides summary information about an import in an import list.
**/
export class ImportSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDateTime" })
  creationDateTime?: Date;

  @Metadata({ data: "json, name=importId" })
  importId?: string;

  @Metadata({ data: "json, name=importStatus" })
  importStatus?: ImportStatusEnum;

  @Metadata({ data: "json, name=importedResourceId" })
  importedResourceId?: string;

  @Metadata({ data: "json, name=importedResourceName" })
  importedResourceName?: string;

  @Metadata({ data: "json, name=lastUpdatedDateTime" })
  lastUpdatedDateTime?: Date;

  @Metadata({ data: "json, name=mergeStrategy" })
  mergeStrategy?: MergeStrategyEnum;
}
