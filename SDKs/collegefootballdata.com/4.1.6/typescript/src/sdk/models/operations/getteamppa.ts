import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamPpaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetTeamPpaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTeamPpaQueryParams;
}


export class GetTeamPpaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TeamPpa })
  teamPpas?: shared.TeamPpa[];
}
