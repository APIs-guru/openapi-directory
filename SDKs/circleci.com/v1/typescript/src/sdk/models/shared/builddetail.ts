import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommitDetail } from "./commitdetail";
import { PreviousBuild } from "./previousbuild";
import { User } from "./user";



// BuildDetail
/** 
 * previous build
**/
export class BuildDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all_commit_details", elemType: CommitDetail })
  allCommitDetails?: CommitDetail[];

  @SpeakeasyMetadata({ data: "json, name=compare" })
  compare?: string;

  @SpeakeasyMetadata({ data: "json, name=job_name" })
  jobName?: string;

  @SpeakeasyMetadata({ data: "json, name=node" })
  node?: any;

  @SpeakeasyMetadata({ data: "json, name=previous_successful_build" })
  previousSuccessfulBuild?: PreviousBuild;

  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ssh_enabled" })
  sshEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=timedout" })
  timedout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usage_queued_at" })
  usageQueuedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
