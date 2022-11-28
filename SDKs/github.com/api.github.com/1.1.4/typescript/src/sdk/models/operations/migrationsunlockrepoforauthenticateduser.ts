import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsUnlockRepoForAuthenticatedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=migration_id" })
  migrationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_name" })
  repoName: string;
}


export class MigrationsUnlockRepoForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsUnlockRepoForAuthenticatedUserPathParams;
}


export class MigrationsUnlockRepoForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
