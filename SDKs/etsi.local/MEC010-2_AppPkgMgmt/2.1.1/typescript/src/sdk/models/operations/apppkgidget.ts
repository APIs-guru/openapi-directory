import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppPkgIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appPkgId" })
  appPkgId: string;
}


export class AppPkgIdGetQueryParams extends SpeakeasyBase {
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


export class AppPkgIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppPkgIdGetPathParams;

  @SpeakeasyMetadata()
  queryParams: AppPkgIdGetQueryParams;
}


export class AppPkgIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
