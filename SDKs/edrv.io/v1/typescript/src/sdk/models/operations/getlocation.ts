import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLocationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetLocationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_chargestations" })
  includeChargestations?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;
}


export class GetLocationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLocationPathParams;

  @Metadata()
  queryParams: GetLocationQueryParams;
}


export class GetLocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
