import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecruitingTeamsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetRecruitingTeamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRecruitingTeamsQueryParams;
}


export class GetRecruitingTeamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamRecruitingRank })
  teamRecruitingRanks?: shared.TeamRecruitingRank[];
}
