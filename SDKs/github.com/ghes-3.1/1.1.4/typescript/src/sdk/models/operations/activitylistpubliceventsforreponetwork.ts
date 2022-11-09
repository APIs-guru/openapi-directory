import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivityListPublicEventsForRepoNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActivityListPublicEventsForRepoNetworkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActivityListPublicEventsForRepoNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActivityListPublicEventsForRepoNetworkPathParams;

  @Metadata()
  queryParams: ActivityListPublicEventsForRepoNetworkQueryParams;
}


export class ActivityListPublicEventsForRepoNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata({ elemType: shared.Event })
  events?: shared.Event[];
}
