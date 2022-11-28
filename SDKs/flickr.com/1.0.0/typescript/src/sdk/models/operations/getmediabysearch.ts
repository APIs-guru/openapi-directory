import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMediaBySearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accuracy" })
  accuracy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bbox" })
  bbox?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contacts" })
  contacts?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content_type" })
  contentType?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=geo_context" })
  geoContext?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=has_geo" })
  hasGeo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=in_gallery" })
  inGallery?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_commons" })
  isCommons?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_getty" })
  isGetty?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=machine_tag_mode" })
  machineTagMode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=machine_tags" })
  machineTags?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_taken_date" })
  maxTakenDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_upload_date" })
  maxUploadDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=media" })
  media?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_taken_date" })
  minTakenDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_upload_date" })
  minUploadDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=place_id" })
  placeId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=privacy_filter" })
  privacyFilter?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius" })
  radius?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=radius_units" })
  radiusUnits?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_search" })
  safeSearch?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=woe_id" })
  woeId?: string;
}


export class GetMediaBySearch200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=perpage" })
  perpage?: number;

  @SpeakeasyMetadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: shared.Photo[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetMediaBySearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMediaBySearchQueryParams;
}


export class GetMediaBySearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMediaBySearch200ApplicationJsonObject?: GetMediaBySearch200ApplicationJson;
}
