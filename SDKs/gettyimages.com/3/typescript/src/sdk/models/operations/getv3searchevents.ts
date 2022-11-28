import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3SearchEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=editorial_segment" })
  editorialSegment?: shared.EditorialSegmentContractEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.EventFieldValuesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;
}


export class GetV3SearchEventsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3SearchEventsQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3SearchEventsHeaders;
}


export class GetV3SearchEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventsSearchResult?: shared.EventsSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
