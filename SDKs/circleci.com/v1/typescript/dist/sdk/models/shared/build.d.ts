import { SpeakeasyBase } from "../../../internal/utils";
import { LifecycleEnum } from "./lifecycleenum";
import { PreviousBuild } from "./previousbuild";
export declare class Build extends SpeakeasyBase {
    body?: string;
    branch?: string;
    buildTimeMillis?: number;
    buildUrl?: string;
    committerEmail?: string;
    committerName?: string;
    dontBuild?: string;
    lifecycle?: LifecycleEnum;
    previous?: PreviousBuild;
    queuedAt?: Date;
    reponame?: string;
    retryOf?: number;
    startTime?: Date;
    stopTime?: Date;
    subject?: string;
    username?: string;
    vcsUrl?: string;
    why?: string;
}
