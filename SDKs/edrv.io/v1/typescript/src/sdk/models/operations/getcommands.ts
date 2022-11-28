import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommandsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$gte]" })
  createdAtDollarGte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt[$lte]" })
  createdAtDollarLte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_chargestation" })
  includeChargestation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_driver" })
  includeDriver?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_transaction" })
  includeTransaction?: boolean;

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


export class GetCommandsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCommandsQueryParams;
}


export class GetCommandsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
