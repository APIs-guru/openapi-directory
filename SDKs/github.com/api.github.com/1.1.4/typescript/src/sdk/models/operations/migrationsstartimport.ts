import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsStartImportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum MigrationsStartImportRequestBodyVcsEnum {
    Subversion = "subversion"
,    Git = "git"
,    Mercurial = "mercurial"
,    Tfvc = "tfvc"
}


export class MigrationsStartImportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=tfvc_project" })
  tfvcProject?: string;

  @Metadata({ data: "json, name=vcs" })
  vcs?: MigrationsStartImportRequestBodyVcsEnum;

  @Metadata({ data: "json, name=vcs_password" })
  vcsPassword?: string;

  @Metadata({ data: "json, name=vcs_url" })
  vcsUrl: string;

  @Metadata({ data: "json, name=vcs_username" })
  vcsUsername?: string;
}


export class MigrationsStartImportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsStartImportPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: MigrationsStartImportRequestBody;
}


export class MigrationsStartImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  import?: shared.Import;

  @Metadata()
  validationError?: shared.ValidationError;
}
