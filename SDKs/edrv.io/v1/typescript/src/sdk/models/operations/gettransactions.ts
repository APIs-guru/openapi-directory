import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetTransactionsStatusEnum {
    Started = "Started"
,    Ended = "Ended"
}


export class GetTransactionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAt[$gte]" })
  createdAtDollarGte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAt[$lte]" })
  createdAtDollarLte?: Date;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=paginate_enabled" })
  paginateEnabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paginate_limit" })
  paginateLimit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=paginate_page" })
  paginatePage?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: shared.SortOrder1Enum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GetTransactionsStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$gte]" })
  updatedAtDollarGte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$lte]" })
  updatedAtDollarLte?: Date;
}


export class GetTransactionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTransactionsQueryParams;
}


export class GetTransactions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasNext" })
  hasNext?: boolean;

  @Metadata({ data: "json, name=hasPrevious" })
  hasPrevious?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: any[];
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTransactions200ApplicationJsonObject?: GetTransactions200ApplicationJson;
}
