package shared

import (
"time")

type GetDomainDetailResponse struct {
    AbuseContactEmail *string `json:"AbuseContactEmail,omitempty"`
    AbuseContactPhone *string `json:"AbuseContactPhone,omitempty"`
    AdminContact ContactDetail `json:"AdminContact"`
    AdminPrivacy *bool `json:"AdminPrivacy,omitempty"`
    AutoRenew *bool `json:"AutoRenew,omitempty"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    DNSSec *string `json:"DnsSec,omitempty"`
    DomainName string `json:"DomainName"`
    ExpirationDate *time.Time `json:"ExpirationDate,omitempty"`
    Nameservers []Nameserver `json:"Nameservers"`
    RegistrantContact ContactDetail `json:"RegistrantContact"`
    RegistrantPrivacy *bool `json:"RegistrantPrivacy,omitempty"`
    RegistrarName *string `json:"RegistrarName,omitempty"`
    RegistrarURL *string `json:"RegistrarUrl,omitempty"`
    RegistryDomainID *string `json:"RegistryDomainId,omitempty"`
    Reseller *string `json:"Reseller,omitempty"`
    StatusList []string `json:"StatusList,omitempty"`
    TechContact ContactDetail `json:"TechContact"`
    TechPrivacy *bool `json:"TechPrivacy,omitempty"`
    UpdatedDate *time.Time `json:"UpdatedDate,omitempty"`
    WhoIsServer *string `json:"WhoIsServer,omitempty"`
    
}

