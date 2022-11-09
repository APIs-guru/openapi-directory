import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImportProjectChoices extends SpeakeasyBase {
  @Metadata({ data: "json, name=human_name" })
  humanName?: string;

  @Metadata({ data: "json, name=tfvc_project" })
  tfvcProject?: string;

  @Metadata({ data: "json, name=vcs" })
  vcs?: string;
}

export enum ImportStatusEnum {
    Auth = "auth"
,    Error = "error"
,    None = "none"
,    Detecting = "detecting"
,    Choose = "choose"
,    AuthFailed = "auth_failed"
,    Importing = "importing"
,    Mapping = "mapping"
,    WaitingToPush = "waiting_to_push"
,    Pushing = "pushing"
,    Complete = "complete"
,    Setup = "setup"
,    Unknown = "unknown"
,    DetectionFoundMultiple = "detection_found_multiple"
,    DetectionFoundNothing = "detection_found_nothing"
,    DetectionNeedsAuth = "detection_needs_auth"
}


// Import
/** 
 * A repository import from an external source.
**/
export class Import extends SpeakeasyBase {
  @Metadata({ data: "json, name=authors_count" })
  authorsCount?: number;

  @Metadata({ data: "json, name=authors_url" })
  authorsUrl: string;

  @Metadata({ data: "json, name=commit_count" })
  commitCount?: number;

  @Metadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @Metadata({ data: "json, name=failed_step" })
  failedStep?: string;

  @Metadata({ data: "json, name=has_large_files" })
  hasLargeFiles?: boolean;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=import_percent" })
  importPercent?: number;

  @Metadata({ data: "json, name=large_files_count" })
  largeFilesCount?: number;

  @Metadata({ data: "json, name=large_files_size" })
  largeFilesSize?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=project_choices", elemType: shared.ImportProjectChoices })
  projectChoices?: ImportProjectChoices[];

  @Metadata({ data: "json, name=push_percent" })
  pushPercent?: number;

  @Metadata({ data: "json, name=repository_url" })
  repositoryUrl: string;

  @Metadata({ data: "json, name=status" })
  status: ImportStatusEnum;

  @Metadata({ data: "json, name=status_text" })
  statusText?: string;

  @Metadata({ data: "json, name=svc_root" })
  svcRoot?: string;

  @Metadata({ data: "json, name=svn_root" })
  svnRoot?: string;

  @Metadata({ data: "json, name=tfvc_project" })
  tfvcProject?: string;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=use_lfs" })
  useLfs?: string;

  @Metadata({ data: "json, name=vcs" })
  vcs: string;

  @Metadata({ data: "json, name=vcs_url" })
  vcsUrl: string;
}
