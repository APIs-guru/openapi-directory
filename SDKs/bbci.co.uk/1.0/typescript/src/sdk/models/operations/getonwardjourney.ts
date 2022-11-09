import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetOnwardJourneyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetOnwardJourneyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetOnwardJourneyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetOnwardJourneyPathParams;

  @Metadata()
  queryParams: GetOnwardJourneyQueryParams;
}


export class GetOnwardJourneyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
