import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Describes event subscriptions.
**/
export declare class EventSubscription extends SpeakeasyBase {
    custSubscriptionId?: string;
    customerAwsId?: string;
    enabled?: boolean;
    eventCategoriesList?: string[];
    severity?: string;
    snsTopicArn?: string;
    sourceIdsList?: string[];
    sourceType?: string;
    status?: string;
    subscriptionCreationTime?: Date;
    tags?: Tag[];
}
