import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsGetStatusForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=migration_id" })
  migrationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum MigrationsGetStatusForOrgExcludeEnum {
    Repositories = "repositories"
}


export class MigrationsGetStatusForOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude" })
  exclude?: MigrationsGetStatusForOrgExcludeEnum[];
}


export class MigrationsGetStatusForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsGetStatusForOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: MigrationsGetStatusForOrgQueryParams;
}


export class MigrationsGetStatusForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  migration?: shared.Migration;
}
