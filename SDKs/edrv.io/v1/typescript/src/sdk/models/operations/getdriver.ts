import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDriverPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDriverQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_group" })
  includeGroup?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_tokens" })
  includeTokens?: boolean;
}


export class GetDriverRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDriverPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDriverQueryParams;
}


export class GetDriverResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
