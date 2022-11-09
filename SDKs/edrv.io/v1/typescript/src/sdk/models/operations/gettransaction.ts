import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTransactionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTransactionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=include_chargestation" })
  includeChargestation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_connector" })
  includeConnector?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_driver" })
  includeDriver?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_evse" })
  includeEvse?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_rate" })
  includeRate?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_reservation" })
  includeReservation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_token" })
  includeToken?: boolean;
}


export class GetTransactionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionPathParams;

  @Metadata()
  queryParams: GetTransactionQueryParams;
}


export class GetTransactionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
