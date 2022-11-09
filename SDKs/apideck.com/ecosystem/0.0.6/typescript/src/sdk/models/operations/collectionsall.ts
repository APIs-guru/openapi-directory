import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CollectionsAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ecosystem_id" })
  ecosystemId: string;
}


export class CollectionsAllQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class CollectionsAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsAllPathParams;

  @Metadata()
  queryParams: CollectionsAllQueryParams;
}


export class CollectionsAllResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCollectionsResponse?: shared.GetCollectionsResponse;

  @Metadata()
  statusCode: number;
}
