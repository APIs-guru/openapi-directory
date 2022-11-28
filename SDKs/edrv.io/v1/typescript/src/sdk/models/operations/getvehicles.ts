import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVehiclesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$gte]" })
  createdAtDollarGte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$lte]" })
  createdAtDollarLte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_driver" })
  includeDriver?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$gte]" })
  updatedAtDollarGte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$lte]" })
  updatedAtDollarLte?: Date;
}


export class GetVehicles200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any[];
}


export class GetVehiclesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVehiclesQueryParams;
}


export class GetVehiclesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVehicles200ApplicationJsonObject?: GetVehicles200ApplicationJson;
}
