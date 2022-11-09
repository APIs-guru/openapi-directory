import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProgrammeRecommendationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetProgrammeRecommendationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetProgrammeRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProgrammeRecommendationsPathParams;

  @Metadata()
  queryParams: GetProgrammeRecommendationsQueryParams;
}


export class GetProgrammeRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
