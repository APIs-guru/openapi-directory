import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppPkgIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appPkgId" })
  appPkgId: string;
}


export class AppPkgIdGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=all_fields" })
  allFields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_default" })
  excludeDefault?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_fields" })
  excludeFields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class AppPkgIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppPkgIdGetPathParams;

  @Metadata()
  queryParams: AppPkgIdGetQueryParams;
}


export class AppPkgIdGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
