import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCoachesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxYear" })
  maxYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minYear" })
  minYear?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetCoachesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCoachesQueryParams;
}


export class GetCoachesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Coach })
  coaches?: shared.Coach[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
