import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecentBuildsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetRecentBuildsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRecentBuildsQueryParams;
}


export class GetRecentBuildsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Build })
  builds?: shared.Build[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
