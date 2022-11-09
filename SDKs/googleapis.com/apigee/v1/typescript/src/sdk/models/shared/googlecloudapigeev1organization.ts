import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudApigeeV1AddonsConfig } from "./googlecloudapigeev1addonsconfig";
import { GoogleCloudApigeeV1Properties } from "./googlecloudapigeev1properties";

export enum GoogleCloudApigeeV1OrganizationBillingTypeEnum {
    BillingTypeUnspecified = "BILLING_TYPE_UNSPECIFIED"
,    Subscription = "SUBSCRIPTION"
,    Evaluation = "EVALUATION"
,    Payg = "PAYG"
}

export enum GoogleCloudApigeeV1OrganizationRuntimeTypeEnum {
    RuntimeTypeUnspecified = "RUNTIME_TYPE_UNSPECIFIED"
,    Cloud = "CLOUD"
,    Hybrid = "HYBRID"
}

export enum GoogleCloudApigeeV1OrganizationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}

export enum GoogleCloudApigeeV1OrganizationSubscriptionTypeEnum {
    SubscriptionTypeUnspecified = "SUBSCRIPTION_TYPE_UNSPECIFIED"
,    Paid = "PAID"
,    Trial = "TRIAL"
}

export enum GoogleCloudApigeeV1OrganizationTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    TypeTrial = "TYPE_TRIAL"
,    TypePaid = "TYPE_PAID"
,    TypeInternal = "TYPE_INTERNAL"
}


export class GoogleCloudApigeeV1Organization extends SpeakeasyBase {
  @Metadata({ data: "json, name=addonsConfig" })
  addonsConfig?: GoogleCloudApigeeV1AddonsConfig;

  @Metadata({ data: "json, name=analyticsRegion" })
  analyticsRegion?: string;

  @Metadata({ data: "json, name=apigeeProjectId" })
  apigeeProjectId?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: string[];

  @Metadata({ data: "json, name=authorizedNetwork" })
  authorizedNetwork?: string;

  @Metadata({ data: "json, name=billingType" })
  billingType?: GoogleCloudApigeeV1OrganizationBillingTypeEnum;

  @Metadata({ data: "json, name=caCertificate" })
  caCertificate?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=customerName" })
  customerName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=environments" })
  environments?: string[];

  @Metadata({ data: "json, name=expiresAt" })
  expiresAt?: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=portalDisabled" })
  portalDisabled?: boolean;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=properties" })
  properties?: GoogleCloudApigeeV1Properties;

  @Metadata({ data: "json, name=runtimeDatabaseEncryptionKeyName" })
  runtimeDatabaseEncryptionKeyName?: string;

  @Metadata({ data: "json, name=runtimeType" })
  runtimeType?: GoogleCloudApigeeV1OrganizationRuntimeTypeEnum;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudApigeeV1OrganizationStateEnum;

  @Metadata({ data: "json, name=subscriptionType" })
  subscriptionType?: GoogleCloudApigeeV1OrganizationSubscriptionTypeEnum;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudApigeeV1OrganizationTypeEnum;
}
