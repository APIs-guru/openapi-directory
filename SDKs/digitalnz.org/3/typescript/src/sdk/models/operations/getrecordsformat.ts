import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRecordsFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: shared.FormatEnum;
}

export enum GetRecordsFormatAndCategoryEnum {
    Newspapers = "Newspapers"
,    Images = "Images"
,    Books = "Books"
,    Articles = "Articles"
,    Journals = "Journals"
,    Archives = "Archives"
,    Audio = "Audio"
,    Other = "Other"
,    Manuscripts = "Manuscripts"
,    ReferenceSources = "Reference sources"
,    ResearchPapers = "Research papers"
,    Videos = "Videos"
,    MusicScore = "Music Score"
,    Groups = "Groups"
,    Data = "Data"
,    Websites = "Websites"
,    Sets = "Sets"
}

export enum GetRecordsFormatAndHasLargeThumbnailUrlEnum {
    Y = "Y"
}

export enum GetRecordsFormatAndUsageEnum {
    Share = "Share"
,    Modify = "Modify"
,    UseCommercially = "Use commercially"
,    AllRightsReserved = "All rights reserved"
,    Unknown = "Unknown"
}

export enum GetRecordsFormatDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetRecordsFormatFacetsEnum {
    Category = "category"
,    ContentPartner = "content_partner"
,    DisplayCollection = "display_collection"
,    Collection = "collection"
,    Creator = "creator"
,    Placename = "placename"
,    Date = "date"
,    Year = "year"
,    Decade = "decade"
,    Century = "century"
,    Language = "language"
,    Rights = "rights"
,    Usage = "usage"
,    Copyright = "copyright"
,    Subject = "subject"
,    Format = "format"
,    DcType = "dc_type"
}

export enum GetRecordsFormatSortEnum {
    SyndicationDate = "syndication_date"
,    Date = "date"
}


export class GetRecordsFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=and[category][]" })
  andCategory?: GetRecordsFormatAndCategoryEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[century]" })
  andCentury?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[collection][]" })
  andCollection?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[content_partner][]" })
  andContentPartner?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[creator][]" })
  andCreator?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[date]" })
  andDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[dc_type][]" })
  andDcType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[decade]" })
  andDecade?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[format][]" })
  andFormat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[has_large_thumbnail_url]" })
  andHasLargeThumbnailUrl?: GetRecordsFormatAndHasLargeThumbnailUrlEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[has_lat_lng]" })
  andHasLatLng?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[is_commercial_use]" })
  andIsCommercialUse?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[or][{filter_field}][]" })
  andOrFilterField?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[placename][]" })
  andPlacename?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[primary_collection][]" })
  andPrimaryCollection?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[subject][]" })
  andSubject?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[title][]" })
  andTitle?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[usage][]" })
  andUsage?: GetRecordsFormatAndUsageEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=and[year]" })
  andYear?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetRecordsFormatDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_filters_from_facets" })
  excludeFiltersFromFacets?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=facets" })
  facets?: GetRecordsFormatFacetsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=facets_page" })
  facetsPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=facets_per_page" })
  facetsPerPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=geo_bbox" })
  geoBbox?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetRecordsFormatSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=without[{filter_field}]" })
  withoutFilterField?: string;
}


export class GetRecordsFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRecordsFormatPathParams;

  @Metadata()
  queryParams: GetRecordsFormatQueryParams;
}


export class GetRecordsFormat200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=facets" })
  facets?: Map<string, Map<string, number>>;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=per_page" })
  perPage?: number;

  @Metadata({ data: "json, name=records", elemType: shared.Record })
  records?: shared.Record[];

  @Metadata({ data: "json, name=request_url" })
  requestUrl?: string;

  @Metadata({ data: "json, name=result_count" })
  resultCount?: number;
}


export class GetRecordsFormatResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getRecordsFormat200ApplicationJsonObject?: GetRecordsFormat200ApplicationJson;

  @Metadata()
  getRecordsFormat400ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  getRecordsFormat403ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
