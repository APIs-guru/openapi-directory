package shared

type CorrectionTypeEnum string

const (
	CorrectionTypeEnumCorrectionTypeUnspecified    CorrectionTypeEnum = "CORRECTION_TYPE_UNSPECIFIED"
	CorrectionTypeEnumVendorIdsAdded               CorrectionTypeEnum = "VENDOR_IDS_ADDED"
	CorrectionTypeEnumSslAttributeRemoved          CorrectionTypeEnum = "SSL_ATTRIBUTE_REMOVED"
	CorrectionTypeEnumFlashFreeAttributeRemoved    CorrectionTypeEnum = "FLASH_FREE_ATTRIBUTE_REMOVED"
	CorrectionTypeEnumFlashFreeAttributeAdded      CorrectionTypeEnum = "FLASH_FREE_ATTRIBUTE_ADDED"
	CorrectionTypeEnumRequiredAttributeAdded       CorrectionTypeEnum = "REQUIRED_ATTRIBUTE_ADDED"
	CorrectionTypeEnumRequiredVendorAdded          CorrectionTypeEnum = "REQUIRED_VENDOR_ADDED"
	CorrectionTypeEnumSslAttributeAdded            CorrectionTypeEnum = "SSL_ATTRIBUTE_ADDED"
	CorrectionTypeEnumInBannerVideoAttributeAdded  CorrectionTypeEnum = "IN_BANNER_VIDEO_ATTRIBUTE_ADDED"
	CorrectionTypeEnumMraidAttributeAdded          CorrectionTypeEnum = "MRAID_ATTRIBUTE_ADDED"
	CorrectionTypeEnumFlashAttributeRemoved        CorrectionTypeEnum = "FLASH_ATTRIBUTE_REMOVED"
	CorrectionTypeEnumVideoInSnippetAttributeAdded CorrectionTypeEnum = "VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED"
)

// Correction
// Output only. Shows any corrections that were applied to this creative.
type Correction struct {
	Contexts []ServingContext    `json:"contexts,omitempty"`
	Details  []string            `json:"details,omitempty"`
	Type     *CorrectionTypeEnum `json:"type,omitempty"`
}
