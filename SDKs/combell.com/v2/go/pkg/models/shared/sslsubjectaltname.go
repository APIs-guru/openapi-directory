package shared

type SslSubjectAltName struct {
	Type  *SslSubjectAltNameTypeEnum `json:"type"`
	Value *string                    `json:"value"`
}
