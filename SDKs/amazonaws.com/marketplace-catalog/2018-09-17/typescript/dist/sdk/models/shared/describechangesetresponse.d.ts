import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChangeSummary } from "./changesummary";
import { FailureCodeEnum } from "./failurecodeenum";
import { ChangeStatusEnum } from "./changestatusenum";
export declare class DescribeChangeSetResponse extends SpeakeasyBase {
    changeSet?: ChangeSummary[];
    changeSetArn?: string;
    changeSetId?: string;
    changeSetName?: string;
    endTime?: string;
    failureCode?: FailureCodeEnum;
    failureDescription?: string;
    startTime?: string;
    status?: ChangeStatusEnum;
}
