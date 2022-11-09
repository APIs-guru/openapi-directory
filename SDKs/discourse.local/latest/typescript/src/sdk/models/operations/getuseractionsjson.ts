import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUserActionsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class GetUserActionsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserActionsJsonQueryParams;
}


export class GetUserActionsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUserActionsJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
