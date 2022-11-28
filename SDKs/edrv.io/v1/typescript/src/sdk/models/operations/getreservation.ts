import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReservationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetReservationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_chargestation" })
  includeChargestation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;
}


export class GetReservationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReservationPathParams;

  @SpeakeasyMetadata()
  queryParams: GetReservationQueryParams;
}


export class GetReservationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
