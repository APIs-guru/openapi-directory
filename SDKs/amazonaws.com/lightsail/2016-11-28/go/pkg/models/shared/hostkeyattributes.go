package shared

import (
	"time"
)

type HostKeyAttributes struct {
	Algorithm         *string    `json:"algorithm"`
	FingerprintSha1   *string    `json:"fingerprintSHA1"`
	FingerprintSha256 *string    `json:"fingerprintSHA256"`
	NotValidAfter     *time.Time `json:"notValidAfter"`
	NotValidBefore    *time.Time `json:"notValidBefore"`
	PublicKey         *string    `json:"publicKey"`
	WitnessedAt       *time.Time `json:"witnessedAt"`
}
