import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReturningProductionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=conference" })
  conference?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=team" })
  team?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetReturningProductionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReturningProductionQueryParams;
}


export class GetReturningProductionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ReturningProduction })
  returningProductions?: shared.ReturningProduction[];

  @SpeakeasyMetadata()
  statusCode: number;
}
