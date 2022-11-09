import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ListAvailabilityAvailabilityEnum {
    Available = "available"
}

export enum ListAvailabilitySortEnum {
    ScheduledStart = "scheduled_start"
}

export enum ListAvailabilitySortDirectionEnum {
    Ascending = "ascending"
,    Descending = "descending"
}

export enum ListAvailabilityTerritoryEnum {
    Uk = "uk"
,    Nonuk = "nonuk"
,    World = "world"
}


export class ListAvailabilityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability?: ListAvailabilityAvailabilityEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=descendants_of" })
  descendantsOf?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=media_set" })
  mediaSet?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListAvailabilitySortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListAvailabilitySortDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=territory" })
  territory?: ListAvailabilityTerritoryEnum[];
}


export class ListAvailabilityRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAvailabilityQueryParams;
}


export class ListAvailabilityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
