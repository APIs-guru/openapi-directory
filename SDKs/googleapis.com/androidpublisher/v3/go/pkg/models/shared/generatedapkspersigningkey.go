package shared

type GeneratedApksPerSigningKey struct {
	CertificateSha256Hash    *string                   `json:"certificateSha256Hash"`
	GeneratedAssetPackSlices []GeneratedAssetPackSlice `json:"generatedAssetPackSlices"`
	GeneratedSplitApks       []GeneratedSplitApk       `json:"generatedSplitApks"`
	GeneratedStandaloneApks  []GeneratedStandaloneApk  `json:"generatedStandaloneApks"`
	GeneratedUniversalApk    *GeneratedUniversalApk    `json:"generatedUniversalApk"`
}
