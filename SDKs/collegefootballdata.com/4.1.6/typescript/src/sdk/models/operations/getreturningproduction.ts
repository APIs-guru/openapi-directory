import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReturningProductionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetReturningProductionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReturningProductionQueryParams;
}


export class GetReturningProductionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ReturningProduction })
  returningProductions?: shared.ReturningProduction[];

  @Metadata()
  statusCode: number;
}
