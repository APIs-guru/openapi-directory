package shared



type GeneratedApksPerSigningKey struct {
    CertificateSha256Hash *string `json:"certificateSha256Hash,omitempty"`
    GeneratedAssetPackSlices []GeneratedAssetPackSlice `json:"generatedAssetPackSlices,omitempty"`
    GeneratedSplitApks []GeneratedSplitApk `json:"generatedSplitApks,omitempty"`
    GeneratedStandaloneApks []GeneratedStandaloneApk `json:"generatedStandaloneApks,omitempty"`
    GeneratedUniversalApk *GeneratedUniversalApk `json:"generatedUniversalApk,omitempty"`
    
}

