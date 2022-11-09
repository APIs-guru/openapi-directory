import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamMatchupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxYear" })
  maxYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minYear" })
  minYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team1" })
  team1: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team2" })
  team2: string;
}


export class GetTeamMatchupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTeamMatchupQueryParams;
}


export class GetTeamMatchupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  teamMatchup?: shared.TeamMatchup;
}
