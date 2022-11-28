import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum {
    SkuUnspecified = "SKU_UNSPECIFIED",
    BceStandardSku = "BCE_STANDARD_SKU"
}

export enum GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}

export enum GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Trial = "TRIAL",
    Paid = "PAID",
    Allowlist = "ALLOWLIST"
}


// GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription
/** 
 * A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.
**/
export class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoRenewEnabled" })
  autoRenewEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=seatCount" })
  seatCount?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum;
}


// GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput
/** 
 * A BeyondCorp Subscription resource represents BeyondCorp Enterprise Subscription. BeyondCorp Enterprise Subscription enables BeyondCorp Enterprise permium features for an organization.
**/
export class GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionSkuEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscriptionTypeEnum;
}
