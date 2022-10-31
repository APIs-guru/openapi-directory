package shared

import (
"time")


type PagesHTTPSCertificateStateEnum string

const (
    PagesHTTPSCertificateStateEnumNew PagesHTTPSCertificateStateEnum = "new"
PagesHTTPSCertificateStateEnumAuthorizationCreated PagesHTTPSCertificateStateEnum = "authorization_created"
PagesHTTPSCertificateStateEnumAuthorizationPending PagesHTTPSCertificateStateEnum = "authorization_pending"
PagesHTTPSCertificateStateEnumAuthorized PagesHTTPSCertificateStateEnum = "authorized"
PagesHTTPSCertificateStateEnumAuthorizationRevoked PagesHTTPSCertificateStateEnum = "authorization_revoked"
PagesHTTPSCertificateStateEnumIssued PagesHTTPSCertificateStateEnum = "issued"
PagesHTTPSCertificateStateEnumUploaded PagesHTTPSCertificateStateEnum = "uploaded"
PagesHTTPSCertificateStateEnumApproved PagesHTTPSCertificateStateEnum = "approved"
PagesHTTPSCertificateStateEnumErrored PagesHTTPSCertificateStateEnum = "errored"
PagesHTTPSCertificateStateEnumBadAuthz PagesHTTPSCertificateStateEnum = "bad_authz"
PagesHTTPSCertificateStateEnumDestroyPending PagesHTTPSCertificateStateEnum = "destroy_pending"
PagesHTTPSCertificateStateEnumDNSChanged PagesHTTPSCertificateStateEnum = "dns_changed"
)


type PagesHTTPSCertificate struct {
    Description string `json:"description"`
    Domains []interface{} `json:"domains"`
    ExpiresAt *time.Time `json:"expires_at,omitempty"`
    State PagesHTTPSCertificateStateEnum `json:"state"`
    
}

