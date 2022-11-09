import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMediaBySearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=accuracy" })
  accuracy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=contacts" })
  contacts?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=content_type" })
  contentType?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=geo_context" })
  geoContext?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=has_geo" })
  hasGeo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=in_gallery" })
  inGallery?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_commons" })
  isCommons?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=is_getty" })
  isGetty?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=license" })
  license?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=machine_tag_mode" })
  machineTagMode?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=machine_tags" })
  machineTags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_taken_date" })
  maxTakenDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_upload_date" })
  maxUploadDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=media" })
  media?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_taken_date" })
  minTakenDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_upload_date" })
  minUploadDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=place_id" })
  placeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=privacy_filter" })
  privacyFilter?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=radius_units" })
  radiusUnits?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=safe_search" })
  safeSearch?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=woe_id" })
  woeId?: string;
}


export class GetMediaBySearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMediaBySearchQueryParams;
}


export class GetMediaBySearch200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=perpage" })
  perpage?: number;

  @Metadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: shared.Photo[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetMediaBySearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMediaBySearch200ApplicationJsonObject?: GetMediaBySearch200ApplicationJson;
}
