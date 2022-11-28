import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProgrammesAtoZSearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=letter" })
  letter: string;
}

export enum GetProgrammesAtoZSearchSortEnum {
    Title = "title"
}


export class GetProgrammesAtoZSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=initial_child_count" })
  initialChildCount: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort: GetProgrammesAtoZSearchSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection: shared.SortDirectionEnum;
}


export class GetProgrammesAtoZSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProgrammesAtoZSearchPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProgrammesAtoZSearchQueryParams;
}


export class GetProgrammesAtoZSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ibl?: any;
}
