package shared

type VideosSortEnum string

const (
	VideosSortEnumName             VideosSortEnum = "name"
	VideosSortEnumMinusDuration    VideosSortEnum = "-duration"
	VideosSortEnumMinusCreatedAt   VideosSortEnum = "-createdAt"
	VideosSortEnumMinusPublishedAt VideosSortEnum = "-publishedAt"
	VideosSortEnumMinusViews       VideosSortEnum = "-views"
	VideosSortEnumMinusLikes       VideosSortEnum = "-likes"
	VideosSortEnumMinusTrending    VideosSortEnum = "-trending"
	VideosSortEnumMinusHot         VideosSortEnum = "-hot"
)
