import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FailureCodeEnum } from "./failurecodeenum";
import { ChangeStatusEnum } from "./changestatusenum";
/**
 * A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called.
**/
export declare class ChangeSetSummaryListItem extends SpeakeasyBase {
    changeSetArn?: string;
    changeSetId?: string;
    changeSetName?: string;
    endTime?: string;
    entityIdList?: string[];
    failureCode?: FailureCodeEnum;
    startTime?: string;
    status?: ChangeStatusEnum;
}
