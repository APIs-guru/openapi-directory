package shared

// HsmClientCertificateMessage
// <p/>
type HsmClientCertificateMessage struct {
	HsmClientCertificates []HsmClientCertificate
	Marker                *string
}
