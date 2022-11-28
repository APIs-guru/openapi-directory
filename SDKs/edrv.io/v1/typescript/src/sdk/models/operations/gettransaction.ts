import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTransactionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_chargestation" })
  includeChargestation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_connector" })
  includeConnector?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_driver" })
  includeDriver?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_evse" })
  includeEvse?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_rate" })
  includeRate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_reservation" })
  includeReservation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_token" })
  includeToken?: boolean;
}


export class GetTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTransactionQueryParams;
}


export class GetTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
