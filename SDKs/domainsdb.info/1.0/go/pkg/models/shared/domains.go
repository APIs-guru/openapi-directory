package shared

import (
	"time"
)

type Domains struct {
	A          []string    `json:"A,omitempty"`
	Cname      []string    `json:"CNAME,omitempty"`
	Mx         []MxRecords `json:"MX,omitempty"`
	Ns         []string    `json:"NS,omitempty"`
	Txt        []string    `json:"TXT,omitempty"`
	Country    *string     `json:"country,omitempty"`
	CreateDate *time.Time  `json:"create_date,omitempty"`
	Domain     *string     `json:"domain,omitempty"`
	IsDead     *string     `json:"isDead,omitempty"`
	UpdateDate *time.Time  `json:"update_date,omitempty"`
}
