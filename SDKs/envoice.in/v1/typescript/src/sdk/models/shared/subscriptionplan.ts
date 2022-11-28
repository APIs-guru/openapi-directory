import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubscriptionPlanFeaturesEnum {
    Api = "Api",
    Teams = "Teams",
    Clients = "Clients",
    Shop = "Shop",
    PaymentLinks = "PaymentLinks",
    Cname = "Cname"
}

export enum SubscriptionPlanRecurrenceEnum {
    Monthly = "Monthly",
    Yearly = "Yearly"
}

export enum SubscriptionPlanStatusEnum {
    ActiveTrial = "ActiveTrial",
    ExpiredTrial = "ExpiredTrial",
    Active = "Active",
    Canceled = "Canceled",
    Fraudlent = "Fraudlent"
}

export enum SubscriptionPlanSystemCancelationReasonEnum {
    FailToCaptureFee = "FailToCaptureFee",
    Fraud = "Fraud"
}


export class SubscriptionPlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CancellatedOn" })
  cancellatedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=CouponCode" })
  couponCode?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ExternalIdentifier" })
  externalIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=Features" })
  features?: SubscriptionPlanFeaturesEnum[];

  @SpeakeasyMetadata({ data: "json, name=HasDuePayment" })
  hasDuePayment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasDuePaymentSince" })
  hasDuePaymentSince?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=IsActive" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsLifetime" })
  isLifetime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LastPaymentOn" })
  lastPaymentOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=MaxClients" })
  maxClients?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=OnHold" })
  onHold?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OrderIdentifier" })
  orderIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=Price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=Recurrence" })
  recurrence?: SubscriptionPlanRecurrenceEnum;

  @SpeakeasyMetadata({ data: "json, name=SaleId" })
  saleId?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: SubscriptionPlanStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=SystemCancelationReason" })
  systemCancelationReason?: SubscriptionPlanSystemCancelationReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=TrialEndsOn" })
  trialEndsOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=TrialNumberOfDays" })
  trialNumberOfDays?: number;

  @SpeakeasyMetadata({ data: "json, name=TrialStartsOn" })
  trialStartsOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
