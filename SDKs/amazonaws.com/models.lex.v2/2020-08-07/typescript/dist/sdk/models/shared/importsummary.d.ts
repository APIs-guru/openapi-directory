import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
/**
 * Provides summary information about an import in an import list.
**/
export declare class ImportSummary extends SpeakeasyBase {
    creationDateTime?: Date;
    importId?: string;
    importStatus?: ImportStatusEnum;
    importedResourceId?: string;
    importedResourceName?: string;
    lastUpdatedDateTime?: Date;
    mergeStrategy?: MergeStrategyEnum;
}
