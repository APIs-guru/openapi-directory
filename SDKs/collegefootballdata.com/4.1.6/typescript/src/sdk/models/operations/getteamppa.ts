import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamPpaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetTeamPpaRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTeamPpaQueryParams;
}


export class GetTeamPpaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TeamPpa })
  teamPpas?: shared.TeamPpa[];
}
