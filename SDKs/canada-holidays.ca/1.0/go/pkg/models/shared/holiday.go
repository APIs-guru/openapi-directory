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

type Holiday struct {
	Date      *time.Time          `json:"date"`
	Federal   *HolidayFederalEnum `json:"federal"`
	ID        *int64              `json:"id"`
	NameFr    *string             `json:"name Fr"`
	NameEn    *string             `json:"nameEn"`
	Provinces []Province          `json:"provinces"`
}
