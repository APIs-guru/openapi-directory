import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetViewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetViewsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=per" })
  per?: shared.PerEnum;
}


export class ReposGetViewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetViewsPathParams;

  @Metadata()
  queryParams: ReposGetViewsQueryParams;
}


export class ReposGetViewsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  viewTraffic?: shared.ViewTraffic;
}
