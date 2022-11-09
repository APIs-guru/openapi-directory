import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEpisodesByGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetEpisodesByGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability: shared.AvailabilityEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=initial_child_count" })
  initialChildCount: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mixin" })
  mixin?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rights" })
  rights: shared.RightsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection: shared.SortDirectionEnum;
}


export class GetEpisodesByGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEpisodesByGroupPathParams;

  @Metadata()
  queryParams: GetEpisodesByGroupQueryParams;
}


export class GetEpisodesByGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ibl?: any;
}
