import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVehiclePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVehicleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_driver" })
  includeDriver?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_token" })
  includeToken?: boolean;
}


export class GetVehicleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVehiclePathParams;

  @Metadata()
  queryParams: GetVehicleQueryParams;
}


export class GetVehicleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
