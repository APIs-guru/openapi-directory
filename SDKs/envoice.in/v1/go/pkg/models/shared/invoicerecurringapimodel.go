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
	DayOfMonth        *int32                                         `json:"DayOfMonth"`
	DayOfWeek         *InvoiceRecurringAPIModelDayOfWeekEnum         `json:"DayOfWeek"`
	DueDateInDays     *int32                                         `json:"DueDateInDays"`
	EndOfRecurrance   *time.Time                                     `json:"EndOfRecurrance"`
	Month             *int32                                         `json:"Month"`
	RecurrancePattern *InvoiceRecurringAPIModelRecurrancePatternEnum `json:"RecurrancePattern"`
	RecurranceValue   *int32                                         `json:"RecurranceValue"`
	StartOfRecurrance *time.Time                                     `json:"StartOfRecurrance"`
	Status            *InvoiceRecurringAPIModelStatusEnum            `json:"Status"`
	Title             *string                                        `json:"Title"`
}
