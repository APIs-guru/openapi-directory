package shared

// GeneratedApksPerSigningKey
// Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.
type GeneratedApksPerSigningKey struct {
	CertificateSha256Hash    *string                   `json:"certificateSha256Hash,omitempty"`
	GeneratedAssetPackSlices []GeneratedAssetPackSlice `json:"generatedAssetPackSlices,omitempty"`
	GeneratedSplitApks       []GeneratedSplitApk       `json:"generatedSplitApks,omitempty"`
	GeneratedStandaloneApks  []GeneratedStandaloneApk  `json:"generatedStandaloneApks,omitempty"`
	GeneratedUniversalApk    *GeneratedUniversalApk    `json:"generatedUniversalApk,omitempty"`
}
