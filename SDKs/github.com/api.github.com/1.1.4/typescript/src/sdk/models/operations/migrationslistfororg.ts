import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrationsListForOrgPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum MigrationsListForOrgExcludeEnum {
    Repositories = "repositories"
}


export class MigrationsListForOrgQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude" })
  exclude?: MigrationsListForOrgExcludeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class MigrationsListForOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrationsListForOrgPathParams;

  @SpeakeasyMetadata()
  queryParams: MigrationsListForOrgQueryParams;
}


export class MigrationsListForOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Migration })
  migrations?: shared.Migration[];
}
