package shared

type PatchFilterKeyEnum string

const (
	PatchFilterKeyEnumArch           PatchFilterKeyEnum = "ARCH"
	PatchFilterKeyEnumAdvisoryID     PatchFilterKeyEnum = "ADVISORY_ID"
	PatchFilterKeyEnumBugzillaID     PatchFilterKeyEnum = "BUGZILLA_ID"
	PatchFilterKeyEnumPatchSet       PatchFilterKeyEnum = "PATCH_SET"
	PatchFilterKeyEnumProduct        PatchFilterKeyEnum = "PRODUCT"
	PatchFilterKeyEnumProductFamily  PatchFilterKeyEnum = "PRODUCT_FAMILY"
	PatchFilterKeyEnumClassification PatchFilterKeyEnum = "CLASSIFICATION"
	PatchFilterKeyEnumCveID          PatchFilterKeyEnum = "CVE_ID"
	PatchFilterKeyEnumEpoch          PatchFilterKeyEnum = "EPOCH"
	PatchFilterKeyEnumMsrcSeverity   PatchFilterKeyEnum = "MSRC_SEVERITY"
	PatchFilterKeyEnumName           PatchFilterKeyEnum = "NAME"
	PatchFilterKeyEnumPatchID        PatchFilterKeyEnum = "PATCH_ID"
	PatchFilterKeyEnumSection        PatchFilterKeyEnum = "SECTION"
	PatchFilterKeyEnumPriority       PatchFilterKeyEnum = "PRIORITY"
	PatchFilterKeyEnumRepository     PatchFilterKeyEnum = "REPOSITORY"
	PatchFilterKeyEnumRelease        PatchFilterKeyEnum = "RELEASE"
	PatchFilterKeyEnumSeverity       PatchFilterKeyEnum = "SEVERITY"
	PatchFilterKeyEnumSecurity       PatchFilterKeyEnum = "SECURITY"
	PatchFilterKeyEnumVersion        PatchFilterKeyEnum = "VERSION"
)
