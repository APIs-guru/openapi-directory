import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MigrationsListForOrgPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export enum MigrationsListForOrgExcludeEnum {
    Repositories = "repositories"
}


export class MigrationsListForOrgQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude" })
  exclude?: MigrationsListForOrgExcludeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class MigrationsListForOrgRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MigrationsListForOrgPathParams;

  @Metadata()
  queryParams: MigrationsListForOrgQueryParams;
}


export class MigrationsListForOrgResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Migration })
  migrations?: shared.Migration[];
}
