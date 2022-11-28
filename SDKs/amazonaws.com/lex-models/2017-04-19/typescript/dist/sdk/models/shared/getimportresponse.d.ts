import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
export declare class GetImportResponse extends SpeakeasyBase {
    createdDate?: Date;
    failureReason?: string[];
    importId?: string;
    importStatus?: ImportStatusEnum;
    mergeStrategy?: MergeStrategyEnum;
    name?: string;
    resourceType?: ResourceTypeEnum;
}
