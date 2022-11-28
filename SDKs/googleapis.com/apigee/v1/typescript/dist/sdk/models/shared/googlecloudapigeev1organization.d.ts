import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1AddonsConfigInput } from "./googlecloudapigeev1addonsconfig";
import { GoogleCloudApigeeV1Properties } from "./googlecloudapigeev1properties";
export declare enum GoogleCloudApigeeV1OrganizationBillingTypeEnum {
    BillingTypeUnspecified = "BILLING_TYPE_UNSPECIFIED",
    Subscription = "SUBSCRIPTION",
    Evaluation = "EVALUATION",
    Payg = "PAYG"
}
export declare enum GoogleCloudApigeeV1OrganizationRuntimeTypeEnum {
    RuntimeTypeUnspecified = "RUNTIME_TYPE_UNSPECIFIED",
    Cloud = "CLOUD",
    Hybrid = "HYBRID"
}
export declare enum GoogleCloudApigeeV1OrganizationTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TypeTrial = "TYPE_TRIAL",
    TypePaid = "TYPE_PAID",
    TypeInternal = "TYPE_INTERNAL"
}
export declare class GoogleCloudApigeeV1OrganizationInput extends SpeakeasyBase {
    addonsConfig?: GoogleCloudApigeeV1AddonsConfigInput;
    analyticsRegion?: string;
    attributes?: string[];
    authorizedNetwork?: string;
    billingType?: GoogleCloudApigeeV1OrganizationBillingTypeEnum;
    customerName?: string;
    description?: string;
    displayName?: string;
    portalDisabled?: boolean;
    properties?: GoogleCloudApigeeV1Properties;
    runtimeDatabaseEncryptionKeyName?: string;
    runtimeType?: GoogleCloudApigeeV1OrganizationRuntimeTypeEnum;
    type?: GoogleCloudApigeeV1OrganizationTypeEnum;
}
