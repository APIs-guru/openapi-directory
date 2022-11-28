import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1AddonsConfigInput } from "./googlecloudapigeev1addonsconfig";
import { GoogleCloudApigeeV1Properties } from "./googlecloudapigeev1properties";


export enum GoogleCloudApigeeV1OrganizationBillingTypeEnum {
    BillingTypeUnspecified = "BILLING_TYPE_UNSPECIFIED",
    Subscription = "SUBSCRIPTION",
    Evaluation = "EVALUATION",
    Payg = "PAYG"
}

export enum GoogleCloudApigeeV1OrganizationRuntimeTypeEnum {
    RuntimeTypeUnspecified = "RUNTIME_TYPE_UNSPECIFIED",
    Cloud = "CLOUD",
    Hybrid = "HYBRID"
}

export enum GoogleCloudApigeeV1OrganizationTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TypeTrial = "TYPE_TRIAL",
    TypePaid = "TYPE_PAID",
    TypeInternal = "TYPE_INTERNAL"
}


export class GoogleCloudApigeeV1OrganizationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addonsConfig" })
  addonsConfig?: GoogleCloudApigeeV1AddonsConfigInput;

  @SpeakeasyMetadata({ data: "json, name=analyticsRegion" })
  analyticsRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: string[];

  @SpeakeasyMetadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=billingType" })
  billingType?: GoogleCloudApigeeV1OrganizationBillingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=customerName" })
  customerName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=portalDisabled" })
  portalDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: GoogleCloudApigeeV1Properties;

  @SpeakeasyMetadata({ data: "json, name=runtimeDatabaseEncryptionKeyName" })
  runtimeDatabaseEncryptionKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeType" })
  runtimeType?: GoogleCloudApigeeV1OrganizationRuntimeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudApigeeV1OrganizationTypeEnum;
}
