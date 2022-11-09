import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestCustomerUsersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: number;
}


export class RequestCustomerUsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_attributes" })
  includeAttributes?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_manageable_rooms" })
  includeManageableRooms?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_roles" })
  includeRoles?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestCustomerUsersHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class RequestCustomerUsersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestCustomerUsersPathParams;

  @Metadata()
  queryParams: RequestCustomerUsersQueryParams;

  @Metadata()
  headers: RequestCustomerUsersHeaders;
}


export class RequestCustomerUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  userList?: shared.UserList;
}
