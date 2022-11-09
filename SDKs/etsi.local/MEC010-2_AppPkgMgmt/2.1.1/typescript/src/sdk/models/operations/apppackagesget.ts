import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppPackagesGetQueryParams extends SpeakeasyBase {
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


export class AppPackagesGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppPackagesGetQueryParams;
}


export class AppPackagesGetResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AppPkgInfo })
  appPkgInfos?: shared.AppPkgInfo[];

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
