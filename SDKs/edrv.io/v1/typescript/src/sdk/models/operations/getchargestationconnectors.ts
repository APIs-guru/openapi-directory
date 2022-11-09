import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetChargeStationConnectorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetChargeStationConnectorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_evse" })
  includeEvse?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;
}


export class GetChargeStationConnectorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChargeStationConnectorsPathParams;

  @Metadata()
  queryParams: GetChargeStationConnectorsQueryParams;
}


export class GetChargeStationConnectorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
