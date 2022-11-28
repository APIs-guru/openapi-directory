import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRecordsFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}

export enum GetRecordsFormatAndCategoryEnum {
    Newspapers = "Newspapers",
    Images = "Images",
    Books = "Books",
    Articles = "Articles",
    Journals = "Journals",
    Archives = "Archives",
    Audio = "Audio",
    Other = "Other",
    Manuscripts = "Manuscripts",
    ReferenceSources = "Reference sources",
    ResearchPapers = "Research papers",
    Videos = "Videos",
    MusicScore = "Music Score",
    Groups = "Groups",
    Data = "Data",
    Websites = "Websites",
    Sets = "Sets"
}

export enum GetRecordsFormatAndHasLargeThumbnailUrlEnum {
    Y = "Y"
}

export enum GetRecordsFormatAndUsageEnum {
    Share = "Share",
    Modify = "Modify",
    UseCommercially = "Use commercially",
    AllRightsReserved = "All rights reserved",
    Unknown = "Unknown"
}

export enum GetRecordsFormatDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetRecordsFormatFacetsEnum {
    Category = "category",
    ContentPartner = "content_partner",
    DisplayCollection = "display_collection",
    Collection = "collection",
    Creator = "creator",
    Placename = "placename",
    Date = "date",
    Year = "year",
    Decade = "decade",
    Century = "century",
    Language = "language",
    Rights = "rights",
    Usage = "usage",
    Copyright = "copyright",
    Subject = "subject",
    Format = "format",
    DcType = "dc_type"
}

export enum GetRecordsFormatSortEnum {
    SyndicationDate = "syndication_date",
    Date = "date"
}


export class GetRecordsFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[category][]" })
  andCategory?: GetRecordsFormatAndCategoryEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[century]" })
  andCentury?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[collection][]" })
  andCollection?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[content_partner][]" })
  andContentPartner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[creator][]" })
  andCreator?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[date]" })
  andDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[dc_type][]" })
  andDcType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[decade]" })
  andDecade?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[format][]" })
  andFormat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[has_large_thumbnail_url]" })
  andHasLargeThumbnailUrl?: GetRecordsFormatAndHasLargeThumbnailUrlEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[has_lat_lng]" })
  andHasLatLng?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[is_commercial_use]" })
  andIsCommercialUse?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[or][{filter_field}][]" })
  andOrFilterField?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[placename][]" })
  andPlacename?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[primary_collection][]" })
  andPrimaryCollection?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[subject][]" })
  andSubject?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[title][]" })
  andTitle?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[usage][]" })
  andUsage?: GetRecordsFormatAndUsageEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=and[year]" })
  andYear?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetRecordsFormatDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_filters_from_facets" })
  excludeFiltersFromFacets?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=facets" })
  facets?: GetRecordsFormatFacetsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets_page" })
  facetsPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facets_per_page" })
  facetsPerPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geo_bbox" })
  geoBbox?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetRecordsFormatSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=without[{filter_field}]" })
  withoutFilterField?: string;
}


export class GetRecordsFormat200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facets" })
  facets?: Map<string, Map<string, number>>;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "json, name=records", elemType: shared.Record })
  records?: shared.Record[];

  @SpeakeasyMetadata({ data: "json, name=request_url" })
  requestUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=result_count" })
  resultCount?: number;
}


export class GetRecordsFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRecordsFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRecordsFormatQueryParams;
}


export class GetRecordsFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRecordsFormat200ApplicationJsonObject?: GetRecordsFormat200ApplicationJson;

  @SpeakeasyMetadata()
  getRecordsFormat400ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  getRecordsFormat403ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
