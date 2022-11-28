import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetTransactionsStatusEnum {
    Started = "Started",
    Ended = "Ended"
}


export class GetTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$gte]" })
  createdAtDollarGte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$lte]" })
  createdAtDollarLte?: Date;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_enabled" })
  paginateEnabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_limit" })
  paginateLimit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paginate_page" })
  paginatePage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.SortOrder1Enum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetTransactionsStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$gte]" })
  updatedAtDollarGte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$lte]" })
  updatedAtDollarLte?: Date;
}


export class GetTransactions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasNext" })
  hasNext?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hasPrevious" })
  hasPrevious?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}


export class GetTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTransactionsQueryParams;
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTransactions200ApplicationJsonObject?: GetTransactions200ApplicationJson;
}
