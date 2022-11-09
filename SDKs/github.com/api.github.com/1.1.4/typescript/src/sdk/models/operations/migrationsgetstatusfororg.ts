import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsGetStatusForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=migration_id" })
  migrationId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum MigrationsGetStatusForOrgExcludeEnum {
    Repositories = "repositories"
}


export class MigrationsGetStatusForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude" })
  exclude?: MigrationsGetStatusForOrgExcludeEnum[];
}


export class MigrationsGetStatusForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsGetStatusForOrgPathParams;

  @Metadata()
  queryParams: MigrationsGetStatusForOrgQueryParams;
}


export class MigrationsGetStatusForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  migration?: shared.Migration;
}
