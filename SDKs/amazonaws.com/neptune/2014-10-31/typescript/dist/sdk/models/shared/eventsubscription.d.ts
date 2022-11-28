import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.
**/
export declare class EventSubscription extends SpeakeasyBase {
    custSubscriptionId?: string;
    customerAwsId?: string;
    enabled?: boolean;
    eventCategoriesList?: string[];
    eventSubscriptionArn?: string;
    snsTopicArn?: string;
    sourceIdsList?: string[];
    sourceType?: string;
    status?: string;
    subscriptionCreationTime?: string;
}
