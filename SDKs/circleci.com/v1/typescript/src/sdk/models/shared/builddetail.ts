import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CommitDetail } from "./commitdetail";
import { PreviousBuild } from "./previousbuild";
import { User } from "./user";


// BuildDetail
/** 
 * previous build
**/
export class BuildDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=all_commit_details", elemType: shared.CommitDetail })
  allCommitDetails?: CommitDetail[];

  @Metadata({ data: "json, name=compare" })
  compare?: string;

  @Metadata({ data: "json, name=job_name" })
  jobName?: string;

  @Metadata({ data: "json, name=node" })
  node?: any;

  @Metadata({ data: "json, name=previous_successful_build" })
  previousSuccessfulBuild?: PreviousBuild;

  @Metadata({ data: "json, name=retries" })
  retries?: boolean;

  @Metadata({ data: "json, name=ssh_enabled" })
  sshEnabled?: boolean;

  @Metadata({ data: "json, name=timedout" })
  timedout?: boolean;

  @Metadata({ data: "json, name=usage_queued_at" })
  usageQueuedAt?: Date;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
