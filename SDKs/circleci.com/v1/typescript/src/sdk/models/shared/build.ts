import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LifecycleEnum } from "./lifecycleenum";
import { PreviousBuild } from "./previousbuild";


export class Build extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=build_time_millis" })
  buildTimeMillis?: number;

  @Metadata({ data: "json, name=build_url" })
  buildUrl?: string;

  @Metadata({ data: "json, name=committer_email" })
  committerEmail?: string;

  @Metadata({ data: "json, name=committer_name" })
  committerName?: string;

  @Metadata({ data: "json, name=dont_build" })
  dontBuild?: string;

  @Metadata({ data: "json, name=lifecycle" })
  lifecycle?: LifecycleEnum;

  @Metadata({ data: "json, name=previous" })
  previous?: PreviousBuild;

  @Metadata({ data: "json, name=queued_at" })
  queuedAt?: Date;

  @Metadata({ data: "json, name=reponame" })
  reponame?: string;

  @Metadata({ data: "json, name=retry_of" })
  retryOf?: number;

  @Metadata({ data: "json, name=start_time" })
  startTime?: Date;

  @Metadata({ data: "json, name=stop_time" })
  stopTime?: Date;

  @Metadata({ data: "json, name=subject" })
  subject?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;

  @Metadata({ data: "json, name=vcs_url" })
  vcsUrl?: string;

  @Metadata({ data: "json, name=why" })
  why?: string;
}
