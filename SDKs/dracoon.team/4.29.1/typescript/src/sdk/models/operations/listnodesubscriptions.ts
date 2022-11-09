import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListNodeSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class ListNodeSubscriptionsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class ListNodeSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListNodeSubscriptionsQueryParams;

  @Metadata()
  headers: ListNodeSubscriptionsHeaders;
}


export class ListNodeSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  subscribedNodeList?: shared.SubscribedNodeList;
}
