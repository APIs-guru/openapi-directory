package shared

import (
	"time"
)

type Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum string

const (
	Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnumPending  Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum = "pending"
	Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnumVerified Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum = "verified"
	Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnumError    Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum = "error"
)

type Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum string

const (
	Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnumCustom      Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum = "custom"
	Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnumLetsEncrypt Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum = "lets_encrypt"
)

type Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems struct {
	CreatedAt       *time.Time                                                                                                `json:"created_at,omitempty"`
	DNSNames        []string                                                                                                  `json:"dns_names,omitempty"`
	ID              *string                                                                                                   `json:"id,omitempty"`
	Name            *string                                                                                                   `json:"name,omitempty"`
	NotAfter        *time.Time                                                                                                `json:"not_after,omitempty"`
	Sha1Fingerprint *string                                                                                                   `json:"sha1_fingerprint,omitempty"`
	State           *Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsStateEnum `json:"state,omitempty"`
	Type            *Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItemsTypeEnum  `json:"type,omitempty"`
}
