import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsStartImportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum MigrationsStartImportRequestBodyVcsEnum {
    Subversion = "subversion",
    Git = "git",
    Mercurial = "mercurial",
    Tfvc = "tfvc"
}


export class MigrationsStartImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tfvc_project" })
  tfvcProject?: string;

  @SpeakeasyMetadata({ data: "json, name=vcs" })
  vcs?: MigrationsStartImportRequestBodyVcsEnum;

  @SpeakeasyMetadata({ data: "json, name=vcs_password" })
  vcsPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=vcs_url" })
  vcsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=vcs_username" })
  vcsUsername?: string;
}


export class MigrationsStartImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsStartImportPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MigrationsStartImportRequestBody;
}


export class MigrationsStartImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  import?: shared.Import;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
