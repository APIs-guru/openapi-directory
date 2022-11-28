import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamMatchupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxYear" })
  maxYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minYear" })
  minYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team1" })
  team1: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team2" })
  team2: string;
}


export class GetTeamMatchupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTeamMatchupQueryParams;
}


export class GetTeamMatchupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  teamMatchup?: shared.TeamMatchup;
}
