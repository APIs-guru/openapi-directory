import { SpeakeasyBase } from "../../../internal/utils";
export declare class EventSubscription extends SpeakeasyBase {
    custSubscriptionId?: string;
    customerAwsId?: string;
    enabled?: boolean;
    eventCategoriesList?: string[];
    snsTopicArn?: string;
    sourceIdsList?: string[];
    sourceType?: string;
    status?: string;
    subscriptionCreationTime?: string;
}
