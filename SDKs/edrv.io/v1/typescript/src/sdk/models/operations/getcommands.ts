import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommandsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAt[$gte]" })
  createdAtDollarGte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAt[$lte]" })
  createdAtDollarLte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_chargestation" })
  includeChargestation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_driver" })
  includeDriver?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_organization" })
  includeOrganization?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_transaction" })
  includeTransaction?: boolean;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$gte]" })
  updatedAtDollarGte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAt[$lte]" })
  updatedAtDollarLte?: Date;
}


export class GetCommandsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommandsQueryParams;
}


export class GetCommandsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
