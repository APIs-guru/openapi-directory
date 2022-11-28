import { SpeakeasyBase } from "../../../internal/utils";
import { StandardsStatusEnum } from "./standardsstatusenum";
/**
 * A resource that represents your subscription to a supported standard.
**/
export declare class StandardsSubscription extends SpeakeasyBase {
    standardsArn: string;
    standardsInput: Map<string, string>;
    standardsStatus: StandardsStatusEnum;
    standardsSubscriptionArn: string;
}
