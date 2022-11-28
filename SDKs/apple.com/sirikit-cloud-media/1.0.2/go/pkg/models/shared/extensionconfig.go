package shared

type ExtensionConfigIntentAddMediaOptEnum string

const (
	ExtensionConfigIntentAddMediaOptEnumResolveMediaDestination ExtensionConfigIntentAddMediaOptEnum = "resolveMediaDestination"
	ExtensionConfigIntentAddMediaOptEnumConfirm                 ExtensionConfigIntentAddMediaOptEnum = "confirm"
)

type ExtensionConfigIntentAddMedia struct {
	Hdr map[string]interface{}
	Opt []ExtensionConfigIntentAddMediaOptEnum
	URL *string
}

type ExtensionConfigIntentPlayMediaOptEnum string

const (
	ExtensionConfigIntentPlayMediaOptEnumResolvePlayShuffled          ExtensionConfigIntentPlayMediaOptEnum = "resolvePlayShuffled"
	ExtensionConfigIntentPlayMediaOptEnumResolvePlaybackRepeatMode    ExtensionConfigIntentPlayMediaOptEnum = "resolvePlaybackRepeatMode"
	ExtensionConfigIntentPlayMediaOptEnumResolvePlaybackQueueLocation ExtensionConfigIntentPlayMediaOptEnum = "resolvePlaybackQueueLocation"
	ExtensionConfigIntentPlayMediaOptEnumResolveResumePlayback        ExtensionConfigIntentPlayMediaOptEnum = "resolveResumePlayback"
)

type ExtensionConfigIntentPlayMedia struct {
	Hdr map[string]interface{}
	Opt []ExtensionConfigIntentPlayMediaOptEnum
	URL *string
}

type ExtensionConfigIntentUpdateMediaAffinityOptEnum string

const (
	ExtensionConfigIntentUpdateMediaAffinityOptEnumResolveAffinityType ExtensionConfigIntentUpdateMediaAffinityOptEnum = "resolveAffinityType"
)

type ExtensionConfigIntentUpdateMediaAffinity struct {
	Hdr map[string]interface{}
	Opt []ExtensionConfigIntentUpdateMediaAffinityOptEnum
	URL *string
}

type ExtensionConfigIntent struct {
	AddMedia            *ExtensionConfigIntentAddMedia
	Hdr                 map[string]interface{}
	PlayMedia           ExtensionConfigIntentPlayMedia
	UpdateMediaAffinity *ExtensionConfigIntentUpdateMediaAffinity
}

type ExtensionConfigMediaQueuesPlayMedia struct {
	Hdr map[string]interface{}
	URL *string
}

type ExtensionConfigMediaQueuesUpdateActivity struct {
	Hdr map[string]interface{}
	URL *string
}

type ExtensionConfigMediaQueues struct {
	Hdr            map[string]interface{}
	PlayMedia      *ExtensionConfigMediaQueuesPlayMedia
	UpdateActivity *ExtensionConfigMediaQueuesUpdateActivity
}

type ExtensionConfigMedia struct {
	Queues *ExtensionConfigMediaQueues
}

type ExtensionConfig struct {
	Hdr     map[string]interface{}
	Intent  ExtensionConfigIntent
	Media   ExtensionConfigMedia
	URL     *string
	Version string
}
