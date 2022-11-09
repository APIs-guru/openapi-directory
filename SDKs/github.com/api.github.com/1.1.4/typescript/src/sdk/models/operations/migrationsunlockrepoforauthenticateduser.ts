import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsUnlockRepoForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=migration_id" })
  migrationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_name" })
  repoName: string;
}


export class MigrationsUnlockRepoForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsUnlockRepoForAuthenticatedUserPathParams;
}


export class MigrationsUnlockRepoForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
