import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGamePpaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeGarbageTime" })
  excludeGarbageTime?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seasonType" })
  seasonType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=week" })
  week?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year: number;
}


export class GetGamePpaRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGamePpaQueryParams;
}


export class GetGamePpaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.GamePpa })
  gamePpas?: shared.GamePpa[];

  @Metadata()
  statusCode: number;
}
