import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlaysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defense" })
  defense?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=defenseConference" })
  defenseConference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offense" })
  offense?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offenseConference" })
  offenseConference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=playType" })
  playType?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=week" })
  week: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetPlaysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPlaysQueryParams;
}


export class GetPlaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Play })
  plays?: shared.Play[];

  @SpeakeasyMetadata()
  statusCode: number;
}
