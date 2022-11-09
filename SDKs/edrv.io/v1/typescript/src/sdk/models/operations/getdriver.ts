import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDriverPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDriverQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_group" })
  includeGroup?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_tokens" })
  includeTokens?: boolean;
}


export class GetDriverRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDriverPathParams;

  @Metadata()
  queryParams: GetDriverQueryParams;
}


export class GetDriverResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
