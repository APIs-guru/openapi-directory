package shared

import (
	"time"
)

type SubscriptionPlanFeaturesEnum string

const (
	SubscriptionPlanFeaturesEnumAPI          SubscriptionPlanFeaturesEnum = "Api"
	SubscriptionPlanFeaturesEnumTeams        SubscriptionPlanFeaturesEnum = "Teams"
	SubscriptionPlanFeaturesEnumClients      SubscriptionPlanFeaturesEnum = "Clients"
	SubscriptionPlanFeaturesEnumShop         SubscriptionPlanFeaturesEnum = "Shop"
	SubscriptionPlanFeaturesEnumPaymentLinks SubscriptionPlanFeaturesEnum = "PaymentLinks"
	SubscriptionPlanFeaturesEnumCname        SubscriptionPlanFeaturesEnum = "Cname"
)

type SubscriptionPlanRecurrenceEnum string

const (
	SubscriptionPlanRecurrenceEnumMonthly SubscriptionPlanRecurrenceEnum = "Monthly"
	SubscriptionPlanRecurrenceEnumYearly  SubscriptionPlanRecurrenceEnum = "Yearly"
)

type SubscriptionPlanStatusEnum string

const (
	SubscriptionPlanStatusEnumActiveTrial  SubscriptionPlanStatusEnum = "ActiveTrial"
	SubscriptionPlanStatusEnumExpiredTrial SubscriptionPlanStatusEnum = "ExpiredTrial"
	SubscriptionPlanStatusEnumActive       SubscriptionPlanStatusEnum = "Active"
	SubscriptionPlanStatusEnumCanceled     SubscriptionPlanStatusEnum = "Canceled"
	SubscriptionPlanStatusEnumFraudlent    SubscriptionPlanStatusEnum = "Fraudlent"
)

type SubscriptionPlanSystemCancelationReasonEnum string

const (
	SubscriptionPlanSystemCancelationReasonEnumFailToCaptureFee SubscriptionPlanSystemCancelationReasonEnum = "FailToCaptureFee"
	SubscriptionPlanSystemCancelationReasonEnumFraud            SubscriptionPlanSystemCancelationReasonEnum = "Fraud"
)

type SubscriptionPlan struct {
	CancellatedOn           *time.Time                                   `json:"CancellatedOn"`
	CouponCode              *string                                      `json:"CouponCode"`
	CurrencyCode            *string                                      `json:"CurrencyCode"`
	ExternalIdentifier      *string                                      `json:"ExternalIdentifier"`
	Features                []SubscriptionPlanFeaturesEnum               `json:"Features"`
	HasDuePayment           *bool                                        `json:"HasDuePayment"`
	HasDuePaymentSince      *time.Time                                   `json:"HasDuePaymentSince"`
	ID                      *int32                                       `json:"Id"`
	Identifier              *string                                      `json:"Identifier"`
	IsActive                *bool                                        `json:"IsActive"`
	IsLifetime              *bool                                        `json:"IsLifetime"`
	LastPaymentOn           *time.Time                                   `json:"LastPaymentOn"`
	MaxClients              *int32                                       `json:"MaxClients"`
	Name                    *string                                      `json:"Name"`
	OnHold                  *bool                                        `json:"OnHold"`
	OrderIdentifier         *string                                      `json:"OrderIdentifier"`
	Price                   *float64                                     `json:"Price"`
	Recurrence              *SubscriptionPlanRecurrenceEnum              `json:"Recurrence"`
	SaleID                  *int64                                       `json:"SaleId"`
	Status                  *SubscriptionPlanStatusEnum                  `json:"Status"`
	SystemCancelationReason *SubscriptionPlanSystemCancelationReasonEnum `json:"SystemCancelationReason"`
	TrialEndsOn             *time.Time                                   `json:"TrialEndsOn"`
	TrialNumberOfDays       *int32                                       `json:"TrialNumberOfDays"`
	TrialStartsOn           *time.Time                                   `json:"TrialStartsOn"`
	UserID                  *int32                                       `json:"UserId"`
	Version                 *int32                                       `json:"Version"`
}
