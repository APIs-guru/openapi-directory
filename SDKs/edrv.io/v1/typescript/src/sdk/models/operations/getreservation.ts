import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReservationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetReservationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_chargestation" })
  includeChargestation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;
}


export class GetReservationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReservationPathParams;

  @Metadata()
  queryParams: GetReservationQueryParams;
}


export class GetReservationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
