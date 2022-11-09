import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTokenQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_driver" })
  includeDriver?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;
}


export class GetTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTokenPathParams;

  @Metadata()
  queryParams: GetTokenQueryParams;
}


export class GetTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
