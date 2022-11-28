import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRosterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetRosterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRosterQueryParams;
}


export class GetRosterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Player })
  players?: shared.Player[];

  @SpeakeasyMetadata()
  statusCode: number;
}
