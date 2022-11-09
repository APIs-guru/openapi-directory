import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProgrammesAtoZSearchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=letter" })
  letter: string;
}

export enum GetProgrammesAtoZSearchSortEnum {
    Title = "title"
}


export class GetProgrammesAtoZSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=initial_child_count" })
  initialChildCount: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort: GetProgrammesAtoZSearchSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection: shared.SortDirectionEnum;
}


export class GetProgrammesAtoZSearchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProgrammesAtoZSearchPathParams;

  @Metadata()
  queryParams: GetProgrammesAtoZSearchQueryParams;
}


export class GetProgrammesAtoZSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
