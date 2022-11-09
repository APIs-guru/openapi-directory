import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecruitingGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=endYear" })
  endYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startYear" })
  startYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;
}


export class GetRecruitingGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRecruitingGroupsQueryParams;
}


export class GetRecruitingGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PositionGroupRecruitingRating })
  positionGroupRecruitingRatings?: shared.PositionGroupRecruitingRating[];

  @Metadata()
  statusCode: number;
}
