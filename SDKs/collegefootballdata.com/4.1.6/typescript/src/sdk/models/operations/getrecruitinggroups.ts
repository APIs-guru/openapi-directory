import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecruitingGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endYear" })
  endYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startYear" })
  startYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;
}


export class GetRecruitingGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRecruitingGroupsQueryParams;
}


export class GetRecruitingGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PositionGroupRecruitingRating })
  positionGroupRecruitingRatings?: shared.PositionGroupRecruitingRating[];

  @SpeakeasyMetadata()
  statusCode: number;
}
