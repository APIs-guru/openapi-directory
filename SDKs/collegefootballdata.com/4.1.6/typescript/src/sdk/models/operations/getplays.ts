import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPlaysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=defense" })
  defense?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=defenseConference" })
  defenseConference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offense" })
  offense?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offenseConference" })
  offenseConference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=playType" })
  playType?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=week" })
  week: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetPlaysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPlaysQueryParams;
}


export class GetPlaysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Play })
  plays?: shared.Play[];

  @Metadata()
  statusCode: number;
}
