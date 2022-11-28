import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubscriptionPlanFeaturesEnum {
    Api = "Api",
    Teams = "Teams",
    Clients = "Clients",
    Shop = "Shop",
    PaymentLinks = "PaymentLinks",
    Cname = "Cname"
}
export declare enum SubscriptionPlanRecurrenceEnum {
    Monthly = "Monthly",
    Yearly = "Yearly"
}
export declare enum SubscriptionPlanStatusEnum {
    ActiveTrial = "ActiveTrial",
    ExpiredTrial = "ExpiredTrial",
    Active = "Active",
    Canceled = "Canceled",
    Fraudlent = "Fraudlent"
}
export declare enum SubscriptionPlanSystemCancelationReasonEnum {
    FailToCaptureFee = "FailToCaptureFee",
    Fraud = "Fraud"
}
export declare class SubscriptionPlan extends SpeakeasyBase {
    cancellatedOn?: Date;
    couponCode?: string;
    currencyCode?: string;
    externalIdentifier?: string;
    features?: SubscriptionPlanFeaturesEnum[];
    hasDuePayment?: boolean;
    hasDuePaymentSince?: Date;
    id?: number;
    identifier?: string;
    isActive?: boolean;
    isLifetime?: boolean;
    lastPaymentOn?: Date;
    maxClients?: number;
    name?: string;
    onHold?: boolean;
    orderIdentifier?: string;
    price?: number;
    recurrence?: SubscriptionPlanRecurrenceEnum;
    saleId?: number;
    status?: SubscriptionPlanStatusEnum;
    systemCancelationReason?: SubscriptionPlanSystemCancelationReasonEnum;
    trialEndsOn?: Date;
    trialNumberOfDays?: number;
    trialStartsOn?: Date;
    userId?: number;
    version?: number;
}
