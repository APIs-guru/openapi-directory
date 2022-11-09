import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCoachesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=firstName" })
  firstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lastName" })
  lastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxYear" })
  maxYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=minYear" })
  minYear?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetCoachesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCoachesQueryParams;
}


export class GetCoachesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Coach })
  coaches?: shared.Coach[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
