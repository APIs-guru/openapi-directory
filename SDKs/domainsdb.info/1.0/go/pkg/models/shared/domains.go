package shared

import (
	"time"
)

type Domains struct {
	A          []string    `json:"A"`
	Cname      []string    `json:"CNAME"`
	Mx         []MxRecords `json:"MX"`
	Ns         []string    `json:"NS"`
	Txt        []string    `json:"TXT"`
	Country    *string     `json:"country"`
	CreateDate *time.Time  `json:"create_date"`
	Domain     *string     `json:"domain"`
	IsDead     *string     `json:"isDead"`
	UpdateDate *time.Time  `json:"update_date"`
}
