package shared

type EePlanListItemIntervalEnum string

const (
	EePlanListItemIntervalEnumDay   EePlanListItemIntervalEnum = "day"
	EePlanListItemIntervalEnumWeek  EePlanListItemIntervalEnum = "week"
	EePlanListItemIntervalEnumMonth EePlanListItemIntervalEnum = "month"
	EePlanListItemIntervalEnumYear  EePlanListItemIntervalEnum = "year"
	EePlanListItemIntervalEnumNone  EePlanListItemIntervalEnum = "none"
)

type EePlanListItem struct {
	Amount          *float32                    `json:"amount,omitempty"`
	CtaText         string                      `json:"ctaText"`
	Currency        string                      `json:"currency"`
	Description     string                      `json:"description"`
	HeaderText      string                      `json:"headerText"`
	HeroText        string                      `json:"heroText"`
	ID              string                      `json:"id"`
	Interval        *EePlanListItemIntervalEnum `json:"interval,omitempty"`
	IntervalCount   *int32                      `json:"intervalCount,omitempty"`
	LongText        string                      `json:"longText"`
	Nickname        string                      `json:"nickname"`
	Product         string                      `json:"product"`
	TrialPeriodDays int32                       `json:"trialPeriodDays"`
}
