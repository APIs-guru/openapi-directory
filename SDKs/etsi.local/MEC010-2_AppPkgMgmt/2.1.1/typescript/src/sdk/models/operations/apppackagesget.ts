import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppPackagesGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all_fields" })
  allFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_default" })
  excludeDefault?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_fields" })
  excludeFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;
}


export class AppPackagesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppPackagesGetQueryParams;
}


export class AppPackagesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AppPkgInfo })
  appPkgInfos?: shared.AppPkgInfo[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
