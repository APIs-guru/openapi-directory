import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestCustomerUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer_id" })
  customerId: number;
}


export class RequestCustomerUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_attributes" })
  includeAttributes?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_manageable_rooms" })
  includeManageableRooms?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_roles" })
  includeRoles?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class RequestCustomerUsersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Service-Token" })
  xSdsServiceToken?: string;
}


export class RequestCustomerUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestCustomerUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestCustomerUsersQueryParams;

  @SpeakeasyMetadata()
  headers: RequestCustomerUsersHeaders;
}


export class RequestCustomerUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userList?: shared.UserList;
}
