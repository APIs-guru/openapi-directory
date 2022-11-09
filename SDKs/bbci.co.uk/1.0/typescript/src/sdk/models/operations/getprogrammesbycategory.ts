import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProgrammesByCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class GetProgrammesByCategoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang: shared.LangEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;
}


export class GetProgrammesByCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProgrammesByCategoryPathParams;

  @Metadata()
  queryParams: GetProgrammesByCategoryQueryParams;
}


export class GetProgrammesByCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
