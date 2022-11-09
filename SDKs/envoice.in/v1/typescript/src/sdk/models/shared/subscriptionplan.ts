import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SubscriptionPlanFeaturesEnum {
    Api = "Api"
,    Teams = "Teams"
,    Clients = "Clients"
,    Shop = "Shop"
,    PaymentLinks = "PaymentLinks"
,    Cname = "Cname"
}

export enum SubscriptionPlanRecurrenceEnum {
    Monthly = "Monthly"
,    Yearly = "Yearly"
}

export enum SubscriptionPlanStatusEnum {
    ActiveTrial = "ActiveTrial"
,    ExpiredTrial = "ExpiredTrial"
,    Active = "Active"
,    Canceled = "Canceled"
,    Fraudlent = "Fraudlent"
}

export enum SubscriptionPlanSystemCancelationReasonEnum {
    FailToCaptureFee = "FailToCaptureFee"
,    Fraud = "Fraud"
}


export class SubscriptionPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=CancellatedOn" })
  cancellatedOn?: Date;

  @Metadata({ data: "json, name=CouponCode" })
  couponCode?: string;

  @Metadata({ data: "json, name=CurrencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=ExternalIdentifier" })
  externalIdentifier?: string;

  @Metadata({ data: "json, name=Features" })
  features?: SubscriptionPlanFeaturesEnum[];

  @Metadata({ data: "json, name=HasDuePayment" })
  hasDuePayment?: boolean;

  @Metadata({ data: "json, name=HasDuePaymentSince" })
  hasDuePaymentSince?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=IsActive" })
  isActive?: boolean;

  @Metadata({ data: "json, name=IsLifetime" })
  isLifetime?: boolean;

  @Metadata({ data: "json, name=LastPaymentOn" })
  lastPaymentOn?: Date;

  @Metadata({ data: "json, name=MaxClients" })
  maxClients?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=OnHold" })
  onHold?: boolean;

  @Metadata({ data: "json, name=OrderIdentifier" })
  orderIdentifier?: string;

  @Metadata({ data: "json, name=Price" })
  price?: number;

  @Metadata({ data: "json, name=Recurrence" })
  recurrence?: SubscriptionPlanRecurrenceEnum;

  @Metadata({ data: "json, name=SaleId" })
  saleId?: number;

  @Metadata({ data: "json, name=Status" })
  status?: SubscriptionPlanStatusEnum;

  @Metadata({ data: "json, name=SystemCancelationReason" })
  systemCancelationReason?: SubscriptionPlanSystemCancelationReasonEnum;

  @Metadata({ data: "json, name=TrialEndsOn" })
  trialEndsOn?: Date;

  @Metadata({ data: "json, name=TrialNumberOfDays" })
  trialNumberOfDays?: number;

  @Metadata({ data: "json, name=TrialStartsOn" })
  trialStartsOn?: Date;

  @Metadata({ data: "json, name=UserId" })
  userId?: number;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
