import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsDeleteArchiveForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=migration_id" })
  migrationId: number;
}


export class MigrationsDeleteArchiveForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsDeleteArchiveForAuthenticatedUserPathParams;
}


export class MigrationsDeleteArchiveForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
