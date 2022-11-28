import { SpeakeasyBase } from "../../../internal/utils";
export declare class PullRequestMinimalBaseRepo extends SpeakeasyBase {
    id: number;
    name: string;
    url: string;
}
export declare class PullRequestMinimalBase extends SpeakeasyBase {
    ref: string;
    repo: PullRequestMinimalBaseRepo;
    sha: string;
}
export declare class PullRequestMinimalHeadRepo extends SpeakeasyBase {
    id: number;
    name: string;
    url: string;
}
export declare class PullRequestMinimalHead extends SpeakeasyBase {
    ref: string;
    repo: PullRequestMinimalHeadRepo;
    sha: string;
}
export declare class PullRequestMinimal extends SpeakeasyBase {
    base: PullRequestMinimalBase;
    head: PullRequestMinimalHead;
    id: number;
    number: number;
    url: string;
}
