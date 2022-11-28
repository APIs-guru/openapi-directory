export var JobTypeEnum;
(function (JobTypeEnum) {
    JobTypeEnum["ActivitypubFollow"] = "activitypub-follow";
    JobTypeEnum["ActivitypubHttpBroadcast"] = "activitypub-http-broadcast";
    JobTypeEnum["ActivitypubHttpFetcher"] = "activitypub-http-fetcher";
    JobTypeEnum["ActivitypubHttpUnicast"] = "activitypub-http-unicast";
    JobTypeEnum["Email"] = "email";
    JobTypeEnum["VideoTranscoding"] = "video-transcoding";
    JobTypeEnum["VideoFileImport"] = "video-file-import";
    JobTypeEnum["VideoImport"] = "video-import";
    JobTypeEnum["VideosViews"] = "videos-views";
    JobTypeEnum["ActivitypubRefresher"] = "activitypub-refresher";
    JobTypeEnum["VideoRedundancy"] = "video-redundancy";
    JobTypeEnum["VideoLiveEnding"] = "video-live-ending";
})(JobTypeEnum || (JobTypeEnum = {}));
