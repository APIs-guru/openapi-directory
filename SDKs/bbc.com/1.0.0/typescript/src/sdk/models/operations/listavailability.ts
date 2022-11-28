import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListAvailabilityAvailabilityEnum {
    Available = "available"
}

export enum ListAvailabilitySortEnum {
    ScheduledStart = "scheduled_start"
}

export enum ListAvailabilitySortDirectionEnum {
    Ascending = "ascending",
    Descending = "descending"
}

export enum ListAvailabilityTerritoryEnum {
    Uk = "uk",
    Nonuk = "nonuk",
    World = "world"
}


export class ListAvailabilityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=availability" })
  availability?: ListAvailabilityAvailabilityEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debug" })
  debug?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=descendants_of" })
  descendantsOf?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=media_set" })
  mediaSet?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListAvailabilitySortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_direction" })
  sortDirection?: ListAvailabilitySortDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=territory" })
  territory?: ListAvailabilityTerritoryEnum[];
}


export class ListAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAvailabilityQueryParams;
}


export class ListAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
