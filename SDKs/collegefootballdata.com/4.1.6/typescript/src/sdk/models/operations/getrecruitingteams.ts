import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecruitingTeamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetRecruitingTeamsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRecruitingTeamsQueryParams;
}


export class GetRecruitingTeamsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamRecruitingRank })
  teamRecruitingRanks?: shared.TeamRecruitingRank[];
}
