import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsGetStatusForAuthenticatedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=migration_id" })
  migrationId: number;
}


export class MigrationsGetStatusForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude" })
  exclude?: string[];
}


export class MigrationsGetStatusForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsGetStatusForAuthenticatedUserPathParams;

  @Metadata()
  queryParams: MigrationsGetStatusForAuthenticatedUserQueryParams;
}


export class MigrationsGetStatusForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  migration?: shared.Migration;
}
