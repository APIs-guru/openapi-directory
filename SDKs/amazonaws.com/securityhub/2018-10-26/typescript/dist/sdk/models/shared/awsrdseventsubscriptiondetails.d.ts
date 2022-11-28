import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details about an Amazon RDS event notification subscription. The subscription allows Amazon RDS to post events to an SNS topic.
**/
export declare class AwsRdsEventSubscriptionDetails extends SpeakeasyBase {
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
