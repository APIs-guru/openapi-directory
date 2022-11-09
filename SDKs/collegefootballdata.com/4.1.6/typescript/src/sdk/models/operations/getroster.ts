import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRosterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetRosterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRosterQueryParams;
}


export class GetRosterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Player })
  players?: shared.Player[];

  @Metadata()
  statusCode: number;
}
