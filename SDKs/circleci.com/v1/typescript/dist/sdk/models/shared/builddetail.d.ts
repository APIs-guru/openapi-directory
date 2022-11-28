import { SpeakeasyBase } from "../../../internal/utils";
import { CommitDetail } from "./commitdetail";
import { PreviousBuild } from "./previousbuild";
import { User } from "./user";
/**
 * previous build
**/
export declare class BuildDetail extends SpeakeasyBase {
    allCommitDetails?: CommitDetail[];
    compare?: string;
    jobName?: string;
    node?: any;
    previousSuccessfulBuild?: PreviousBuild;
    retries?: boolean;
    sshEnabled?: boolean;
    timedout?: boolean;
    usageQueuedAt?: Date;
    user?: User;
}
