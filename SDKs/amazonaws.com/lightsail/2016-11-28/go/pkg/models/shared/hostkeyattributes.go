package shared

import (
	"time"
)

type HostKeyAttributes struct {
	Algorithm         *string    `json:"algorithm,omitempty"`
	FingerprintSha1   *string    `json:"fingerprintSHA1,omitempty"`
	FingerprintSha256 *string    `json:"fingerprintSHA256,omitempty"`
	NotValidAfter     *time.Time `json:"notValidAfter,omitempty"`
	NotValidBefore    *time.Time `json:"notValidBefore,omitempty"`
	PublicKey         *string    `json:"publicKey,omitempty"`
	WitnessedAt       *time.Time `json:"witnessedAt,omitempty"`
}
