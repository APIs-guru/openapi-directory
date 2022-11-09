import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsGetArchiveForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=migration_id" })
  migrationId: number;
}


export class MigrationsGetArchiveForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsGetArchiveForAuthenticatedUserPathParams;
}


export class MigrationsGetArchiveForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
