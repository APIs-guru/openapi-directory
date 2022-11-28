import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExtensionConfigIntentAddMediaOptEnum {
    ResolveMediaDestination = "resolveMediaDestination",
    Confirm = "confirm"
}
export declare class ExtensionConfigIntentAddMedia extends SpeakeasyBase {
    hdr?: Map<string, any>;
    opt?: ExtensionConfigIntentAddMediaOptEnum[];
    url?: string;
}
export declare enum ExtensionConfigIntentPlayMediaOptEnum {
    ResolvePlayShuffled = "resolvePlayShuffled",
    ResolvePlaybackRepeatMode = "resolvePlaybackRepeatMode",
    ResolvePlaybackQueueLocation = "resolvePlaybackQueueLocation",
    ResolveResumePlayback = "resolveResumePlayback"
}
export declare class ExtensionConfigIntentPlayMedia extends SpeakeasyBase {
    hdr?: Map<string, any>;
    opt?: ExtensionConfigIntentPlayMediaOptEnum[];
    url?: string;
}
export declare enum ExtensionConfigIntentUpdateMediaAffinityOptEnum {
    ResolveAffinityType = "resolveAffinityType"
}
export declare class ExtensionConfigIntentUpdateMediaAffinity extends SpeakeasyBase {
    hdr?: Map<string, any>;
    opt?: ExtensionConfigIntentUpdateMediaAffinityOptEnum[];
    url?: string;
}
export declare class ExtensionConfigIntent extends SpeakeasyBase {
    addMedia?: ExtensionConfigIntentAddMedia;
    hdr?: Map<string, any>;
    playMedia: ExtensionConfigIntentPlayMedia;
    updateMediaAffinity?: ExtensionConfigIntentUpdateMediaAffinity;
}
export declare class ExtensionConfigMediaQueuesPlayMedia extends SpeakeasyBase {
    hdr?: Map<string, any>;
    url?: string;
}
export declare class ExtensionConfigMediaQueuesUpdateActivity extends SpeakeasyBase {
    hdr?: Map<string, any>;
    url?: string;
}
export declare class ExtensionConfigMediaQueues extends SpeakeasyBase {
    hdr?: Map<string, any>;
    playMedia?: ExtensionConfigMediaQueuesPlayMedia;
    updateActivity?: ExtensionConfigMediaQueuesUpdateActivity;
}
export declare class ExtensionConfigMedia extends SpeakeasyBase {
    queues?: ExtensionConfigMediaQueues;
}
export declare class ExtensionConfig extends SpeakeasyBase {
    hdr?: Map<string, any>;
    intent: ExtensionConfigIntent;
    media: ExtensionConfigMedia;
    url?: string;
    version: string;
}
