package shared

import (
	"time"
)

type InvoiceRecurringAPIModelDayOfWeekEnum string

const (
	InvoiceRecurringAPIModelDayOfWeekEnumSunday    InvoiceRecurringAPIModelDayOfWeekEnum = "Sunday"
	InvoiceRecurringAPIModelDayOfWeekEnumMonday    InvoiceRecurringAPIModelDayOfWeekEnum = "Monday"
	InvoiceRecurringAPIModelDayOfWeekEnumTuesday   InvoiceRecurringAPIModelDayOfWeekEnum = "Tuesday"
	InvoiceRecurringAPIModelDayOfWeekEnumWednesday InvoiceRecurringAPIModelDayOfWeekEnum = "Wednesday"
	InvoiceRecurringAPIModelDayOfWeekEnumThursday  InvoiceRecurringAPIModelDayOfWeekEnum = "Thursday"
	InvoiceRecurringAPIModelDayOfWeekEnumFriday    InvoiceRecurringAPIModelDayOfWeekEnum = "Friday"
	InvoiceRecurringAPIModelDayOfWeekEnumSaturday  InvoiceRecurringAPIModelDayOfWeekEnum = "Saturday"
)

type InvoiceRecurringAPIModelRecurrancePatternEnum string

const (
	InvoiceRecurringAPIModelRecurrancePatternEnumDaily   InvoiceRecurringAPIModelRecurrancePatternEnum = "Daily"
	InvoiceRecurringAPIModelRecurrancePatternEnumWeekly  InvoiceRecurringAPIModelRecurrancePatternEnum = "Weekly"
	InvoiceRecurringAPIModelRecurrancePatternEnumMonthly InvoiceRecurringAPIModelRecurrancePatternEnum = "Monthly"
	InvoiceRecurringAPIModelRecurrancePatternEnumYearly  InvoiceRecurringAPIModelRecurrancePatternEnum = "Yearly"
)

type InvoiceRecurringAPIModelStatusEnum string

const (
	InvoiceRecurringAPIModelStatusEnumPending   InvoiceRecurringAPIModelStatusEnum = "Pending"
	InvoiceRecurringAPIModelStatusEnumActive    InvoiceRecurringAPIModelStatusEnum = "Active"
	InvoiceRecurringAPIModelStatusEnumCancelled InvoiceRecurringAPIModelStatusEnum = "Cancelled"
	InvoiceRecurringAPIModelStatusEnumFinished  InvoiceRecurringAPIModelStatusEnum = "Finished"
)

type InvoiceRecurringAPIModel struct {
	DayOfMonth        *int32                                         `json:"DayOfMonth,omitempty"`
	DayOfWeek         *InvoiceRecurringAPIModelDayOfWeekEnum         `json:"DayOfWeek,omitempty"`
	DueDateInDays     *int32                                         `json:"DueDateInDays,omitempty"`
	EndOfRecurrance   *time.Time                                     `json:"EndOfRecurrance,omitempty"`
	Month             *int32                                         `json:"Month,omitempty"`
	RecurrancePattern *InvoiceRecurringAPIModelRecurrancePatternEnum `json:"RecurrancePattern,omitempty"`
	RecurranceValue   *int32                                         `json:"RecurranceValue,omitempty"`
	StartOfRecurrance *time.Time                                     `json:"StartOfRecurrance,omitempty"`
	Status            *InvoiceRecurringAPIModelStatusEnum            `json:"Status,omitempty"`
	Title             *string                                        `json:"Title,omitempty"`
}
