import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExtensionConfigIntentAddMediaOptEnum {
    ResolveMediaDestination = "resolveMediaDestination",
    Confirm = "confirm"
}


export class ExtensionConfigIntentAddMedia extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hdr?: Map<string, any>;

  @SpeakeasyMetadata()
  opt?: ExtensionConfigIntentAddMediaOptEnum[];

  @SpeakeasyMetadata()
  url?: string;
}

export enum ExtensionConfigIntentPlayMediaOptEnum {
    ResolvePlayShuffled = "resolvePlayShuffled",
    ResolvePlaybackRepeatMode = "resolvePlaybackRepeatMode",
    ResolvePlaybackQueueLocation = "resolvePlaybackQueueLocation",
    ResolveResumePlayback = "resolveResumePlayback"
}


export class ExtensionConfigIntentPlayMedia extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hdr?: Map<string, any>;

  @SpeakeasyMetadata()
  opt?: ExtensionConfigIntentPlayMediaOptEnum[];

  @SpeakeasyMetadata()
  url?: string;
}

export enum ExtensionConfigIntentUpdateMediaAffinityOptEnum {
    ResolveAffinityType = "resolveAffinityType"
}


export class ExtensionConfigIntentUpdateMediaAffinity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hdr?: Map<string, any>;

  @SpeakeasyMetadata()
  opt?: ExtensionConfigIntentUpdateMediaAffinityOptEnum[];

  @SpeakeasyMetadata()
  url?: string;
}


export class ExtensionConfigIntent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addMedia?: ExtensionConfigIntentAddMedia;

  @SpeakeasyMetadata()
  hdr?: Map<string, any>;

  @SpeakeasyMetadata()
  playMedia: ExtensionConfigIntentPlayMedia;

  @SpeakeasyMetadata()
  updateMediaAffinity?: ExtensionConfigIntentUpdateMediaAffinity;
}


export class ExtensionConfigMediaQueuesPlayMedia extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hdr?: Map<string, any>;

  @SpeakeasyMetadata()
  url?: string;
}


export class ExtensionConfigMediaQueuesUpdateActivity extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hdr?: Map<string, any>;

  @SpeakeasyMetadata()
  url?: string;
}


export class ExtensionConfigMediaQueues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hdr?: Map<string, any>;

  @SpeakeasyMetadata()
  playMedia?: ExtensionConfigMediaQueuesPlayMedia;

  @SpeakeasyMetadata()
  updateActivity?: ExtensionConfigMediaQueuesUpdateActivity;
}


export class ExtensionConfigMedia extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queues?: ExtensionConfigMediaQueues;
}


export class ExtensionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hdr?: Map<string, any>;

  @SpeakeasyMetadata()
  intent: ExtensionConfigIntent;

  @SpeakeasyMetadata()
  media: ExtensionConfigMedia;

  @SpeakeasyMetadata()
  url?: string;

  @SpeakeasyMetadata()
  version: string;
}
