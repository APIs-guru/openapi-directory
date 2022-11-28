import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsUpdateImportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class MigrationsUpdateImportRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tfvc_project" })
  tfvcProject?: string;

  @SpeakeasyMetadata({ data: "json, name=vcs" })
  vcs?: string;

  @SpeakeasyMetadata({ data: "json, name=vcs_password" })
  vcsPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=vcs_username" })
  vcsUsername?: string;
}


export class MigrationsUpdateImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsUpdateImportPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MigrationsUpdateImportRequestBody;
}


export class MigrationsUpdateImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  import?: shared.Import;
}
