package shared

type PredefinedAbuseReasonsEnum string

const (
	PredefinedAbuseReasonsEnumViolentOrAbusive PredefinedAbuseReasonsEnum = "violentOrAbusive"
	PredefinedAbuseReasonsEnumHatefulOrAbusive PredefinedAbuseReasonsEnum = "hatefulOrAbusive"
	PredefinedAbuseReasonsEnumSpamOrMisleading PredefinedAbuseReasonsEnum = "spamOrMisleading"
	PredefinedAbuseReasonsEnumPrivacy          PredefinedAbuseReasonsEnum = "privacy"
	PredefinedAbuseReasonsEnumRights           PredefinedAbuseReasonsEnum = "rights"
	PredefinedAbuseReasonsEnumServerRules      PredefinedAbuseReasonsEnum = "serverRules"
	PredefinedAbuseReasonsEnumThumbnails       PredefinedAbuseReasonsEnum = "thumbnails"
	PredefinedAbuseReasonsEnumCaptions         PredefinedAbuseReasonsEnum = "captions"
)
