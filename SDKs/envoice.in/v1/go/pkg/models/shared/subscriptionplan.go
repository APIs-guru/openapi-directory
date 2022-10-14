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
	CancellatedOn           *time.Time                                   `json:"CancellatedOn,omitempty"`
	CouponCode              *string                                      `json:"CouponCode,omitempty"`
	CurrencyCode            *string                                      `json:"CurrencyCode,omitempty"`
	ExternalIdentifier      *string                                      `json:"ExternalIdentifier,omitempty"`
	Features                []SubscriptionPlanFeaturesEnum               `json:"Features,omitempty"`
	HasDuePayment           *bool                                        `json:"HasDuePayment,omitempty"`
	HasDuePaymentSince      *time.Time                                   `json:"HasDuePaymentSince,omitempty"`
	ID                      *int32                                       `json:"Id,omitempty"`
	Identifier              *string                                      `json:"Identifier,omitempty"`
	IsActive                *bool                                        `json:"IsActive,omitempty"`
	IsLifetime              *bool                                        `json:"IsLifetime,omitempty"`
	LastPaymentOn           *time.Time                                   `json:"LastPaymentOn,omitempty"`
	MaxClients              *int32                                       `json:"MaxClients,omitempty"`
	Name                    *string                                      `json:"Name,omitempty"`
	OnHold                  *bool                                        `json:"OnHold,omitempty"`
	OrderIdentifier         *string                                      `json:"OrderIdentifier,omitempty"`
	Price                   *float64                                     `json:"Price,omitempty"`
	Recurrence              *SubscriptionPlanRecurrenceEnum              `json:"Recurrence,omitempty"`
	SaleID                  *int64                                       `json:"SaleId,omitempty"`
	Status                  *SubscriptionPlanStatusEnum                  `json:"Status,omitempty"`
	SystemCancelationReason *SubscriptionPlanSystemCancelationReasonEnum `json:"SystemCancelationReason,omitempty"`
	TrialEndsOn             *time.Time                                   `json:"TrialEndsOn,omitempty"`
	TrialNumberOfDays       *int32                                       `json:"TrialNumberOfDays,omitempty"`
	TrialStartsOn           *time.Time                                   `json:"TrialStartsOn,omitempty"`
	UserID                  *int32                                       `json:"UserId,omitempty"`
	Version                 *int32                                       `json:"Version,omitempty"`
}
