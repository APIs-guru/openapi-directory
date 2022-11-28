import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_driver" })
  includeDriver?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;
}


export class GetTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTokenPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTokenQueryParams;
}


export class GetTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
