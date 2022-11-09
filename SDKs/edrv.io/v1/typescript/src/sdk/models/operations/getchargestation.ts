import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChargeStationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetChargeStationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_evses" })
  includeEvses?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_location" })
  includeLocation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;
}


export class GetChargeStationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChargeStationPathParams;

  @Metadata()
  queryParams: GetChargeStationQueryParams;
}


export class GetChargeStationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
