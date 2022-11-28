import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LifecycleEnum } from "./lifecycleenum";
import { PreviousBuild } from "./previousbuild";



export class Build extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=build_time_millis" })
  buildTimeMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=build_url" })
  buildUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=committer_email" })
  committerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=committer_name" })
  committerName?: string;

  @SpeakeasyMetadata({ data: "json, name=dont_build" })
  dontBuild?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycle" })
  lifecycle?: LifecycleEnum;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: PreviousBuild;

  @SpeakeasyMetadata({ data: "json, name=queued_at" })
  queuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=reponame" })
  reponame?: string;

  @SpeakeasyMetadata({ data: "json, name=retry_of" })
  retryOf?: number;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=stop_time" })
  stopTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;

  @SpeakeasyMetadata({ data: "json, name=vcs_url" })
  vcsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=why" })
  why?: string;
}
