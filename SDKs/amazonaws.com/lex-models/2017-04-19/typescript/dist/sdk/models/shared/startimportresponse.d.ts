import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
export declare class StartImportResponse extends SpeakeasyBase {
    createdDate?: Date;
    importId?: string;
    importStatus?: ImportStatusEnum;
    mergeStrategy?: MergeStrategyEnum;
    name?: string;
    resourceType?: ResourceTypeEnum;
    tags?: Tag[];
}
