import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImportProjectChoices extends SpeakeasyBase {
    humanName?: string;
    tfvcProject?: string;
    vcs?: string;
}
export declare enum ImportStatusEnum {
    Auth = "auth",
    Error = "error",
    None = "none",
    Detecting = "detecting",
    Choose = "choose",
    AuthFailed = "auth_failed",
    Importing = "importing",
    Mapping = "mapping",
    WaitingToPush = "waiting_to_push",
    Pushing = "pushing",
    Complete = "complete",
    Setup = "setup",
    Unknown = "unknown",
    DetectionFoundMultiple = "detection_found_multiple",
    DetectionFoundNothing = "detection_found_nothing",
    DetectionNeedsAuth = "detection_needs_auth"
}
/**
 * A repository import from an external source.
**/
export declare class Import extends SpeakeasyBase {
    authorsCount?: number;
    authorsUrl: string;
    commitCount?: number;
    errorMessage?: string;
    failedStep?: string;
    hasLargeFiles?: boolean;
    htmlUrl: string;
    importPercent?: number;
    largeFilesCount?: number;
    largeFilesSize?: number;
    message?: string;
    projectChoices?: ImportProjectChoices[];
    pushPercent?: number;
    repositoryUrl: string;
    status: ImportStatusEnum;
    statusText?: string;
    svcRoot?: string;
    svnRoot?: string;
    tfvcProject?: string;
    url: string;
    useLfs?: string;
    vcs: string;
    vcsUrl: string;
}
