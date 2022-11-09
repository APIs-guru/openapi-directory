import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3SearchEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_from" })
  dateFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_to" })
  dateTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=editorial_segment" })
  editorialSegment?: shared.EditorialSegmentContractEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: shared.EventFieldValuesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;
}


export class GetV3SearchEventsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=GI-Country-Code" })
  giCountryCode?: string;
}


export class GetV3SearchEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3SearchEventsQueryParams;

  @Metadata()
  headers: GetV3SearchEventsHeaders;
}


export class GetV3SearchEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventsSearchResult?: shared.EventsSearchResult;

  @Metadata()
  statusCode: number;
}
