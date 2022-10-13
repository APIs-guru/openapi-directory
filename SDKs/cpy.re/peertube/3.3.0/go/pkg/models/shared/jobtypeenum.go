package shared

type JobTypeEnum string

const (
	JobTypeEnumActivitypubFollow        JobTypeEnum = "activitypub-follow"
	JobTypeEnumActivitypubHTTPBroadcast JobTypeEnum = "activitypub-http-broadcast"
	JobTypeEnumActivitypubHTTPFetcher   JobTypeEnum = "activitypub-http-fetcher"
	JobTypeEnumActivitypubHTTPUnicast   JobTypeEnum = "activitypub-http-unicast"
	JobTypeEnumEmail                    JobTypeEnum = "email"
	JobTypeEnumVideoTranscoding         JobTypeEnum = "video-transcoding"
	JobTypeEnumVideoFileImport          JobTypeEnum = "video-file-import"
	JobTypeEnumVideoImport              JobTypeEnum = "video-import"
	JobTypeEnumVideosViews              JobTypeEnum = "videos-views"
	JobTypeEnumActivitypubRefresher     JobTypeEnum = "activitypub-refresher"
	JobTypeEnumVideoRedundancy          JobTypeEnum = "video-redundancy"
	JobTypeEnumVideoLiveEnding          JobTypeEnum = "video-live-ending"
)
