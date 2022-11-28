import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
import { MergeStrategyEnum } from "./mergestrategyenum";
import { ImportResourceSpecification } from "./importresourcespecification";
export declare class StartImportResponse extends SpeakeasyBase {
    creationDateTime?: Date;
    importId?: string;
    importStatus?: ImportStatusEnum;
    mergeStrategy?: MergeStrategyEnum;
    resourceSpecification?: ImportResourceSpecification;
}
