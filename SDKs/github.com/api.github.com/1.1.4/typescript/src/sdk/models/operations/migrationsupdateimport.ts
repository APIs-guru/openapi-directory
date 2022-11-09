import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsUpdateImportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class MigrationsUpdateImportRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=tfvc_project" })
  tfvcProject?: string;

  @Metadata({ data: "json, name=vcs" })
  vcs?: string;

  @Metadata({ data: "json, name=vcs_password" })
  vcsPassword?: string;

  @Metadata({ data: "json, name=vcs_username" })
  vcsUsername?: string;
}


export class MigrationsUpdateImportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsUpdateImportPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: MigrationsUpdateImportRequestBody;
}


export class MigrationsUpdateImportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  import?: shared.Import;
}
