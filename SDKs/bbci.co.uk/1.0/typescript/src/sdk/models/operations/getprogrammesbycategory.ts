import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProgrammesByCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class GetProgrammesByCategoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: shared.LangEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetProgrammesByCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProgrammesByCategoryPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProgrammesByCategoryQueryParams;
}


export class GetProgrammesByCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
