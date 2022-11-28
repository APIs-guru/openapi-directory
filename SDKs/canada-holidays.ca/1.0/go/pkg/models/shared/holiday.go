package shared

import (
	"time"
)

type HolidayFederalEnum string

const (
	HolidayFederalEnumZero  HolidayFederalEnum = "0"
	HolidayFederalEnumOne   HolidayFederalEnum = "1"
	HolidayFederalEnumTrue  HolidayFederalEnum = "true"
	HolidayFederalEnumFalse HolidayFederalEnum = "false"
)

// Holiday
// A Canadian holiday. Includes a name, date, and a list of regions that observe this holiday.
type Holiday struct {
	Date      *time.Time          `json:"date,omitempty"`
	Federal   *HolidayFederalEnum `json:"federal,omitempty"`
	ID        *int64              `json:"id,omitempty"`
	NameFr    *string             `json:"name Fr,omitempty"`
	NameEn    *string             `json:"nameEn,omitempty"`
	Provinces []Province          `json:"provinces,omitempty"`
}
