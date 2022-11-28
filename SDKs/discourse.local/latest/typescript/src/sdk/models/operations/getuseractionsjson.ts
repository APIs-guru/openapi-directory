import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUserActionsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username: string;
}


export class GetUserActionsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserActionsJsonQueryParams;
}


export class GetUserActionsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUserActionsJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
