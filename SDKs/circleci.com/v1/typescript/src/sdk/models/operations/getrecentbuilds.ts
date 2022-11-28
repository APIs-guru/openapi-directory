import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecentBuildsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetRecentBuildsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRecentBuildsQueryParams;
}


export class GetRecentBuildsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Build })
  builds?: shared.Build[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
