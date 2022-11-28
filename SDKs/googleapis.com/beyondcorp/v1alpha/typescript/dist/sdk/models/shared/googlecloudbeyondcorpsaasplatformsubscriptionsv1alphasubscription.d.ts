import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum {
    SkuUnspecified = "SKU_UNSPECIFIED",
    BceStandardSku = "BCE_STANDARD_SKU"
}
export declare enum GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare enum GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Trial = "TRIAL",
    Paid = "PAID",
    Allowlist = "ALLOWLIST"
}
/**
 * A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.
**/
export declare class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription extends SpeakeasyBase {
    autoRenewEnabled?: boolean;
    createTime?: string;
    endTime?: string;
    name?: string;
    seatCount?: string;
    sku?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum;
    startTime?: string;
    state?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum;
    type?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum;
}
/**
 * A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.
**/
export declare class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput extends SpeakeasyBase {
    name?: string;
    sku?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum;
    type?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum;
}
