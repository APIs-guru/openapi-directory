import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportProjectChoices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=human_name" })
  humanName?: string;

  @SpeakeasyMetadata({ data: "json, name=tfvc_project" })
  tfvcProject?: string;

  @SpeakeasyMetadata({ data: "json, name=vcs" })
  vcs?: string;
}

export enum ImportStatusEnum {
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


// Import
/** 
 * A repository import from an external source.
**/
export class Import extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authors_count" })
  authorsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=authors_url" })
  authorsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=commit_count" })
  commitCount?: number;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=failed_step" })
  failedStep?: string;

  @SpeakeasyMetadata({ data: "json, name=has_large_files" })
  hasLargeFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=import_percent" })
  importPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=large_files_count" })
  largeFilesCount?: number;

  @SpeakeasyMetadata({ data: "json, name=large_files_size" })
  largeFilesSize?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=project_choices", elemType: ImportProjectChoices })
  projectChoices?: ImportProjectChoices[];

  @SpeakeasyMetadata({ data: "json, name=push_percent" })
  pushPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=repository_url" })
  repositoryUrl: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ImportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_text" })
  statusText?: string;

  @SpeakeasyMetadata({ data: "json, name=svc_root" })
  svcRoot?: string;

  @SpeakeasyMetadata({ data: "json, name=svn_root" })
  svnRoot?: string;

  @SpeakeasyMetadata({ data: "json, name=tfvc_project" })
  tfvcProject?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=use_lfs" })
  useLfs?: string;

  @SpeakeasyMetadata({ data: "json, name=vcs" })
  vcs: string;

  @SpeakeasyMetadata({ data: "json, name=vcs_url" })
  vcsUrl: string;
}
