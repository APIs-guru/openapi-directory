import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMediaByPersonIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content_type" })
  contentType?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_taken_date" })
  maxTakenDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_upload_date" })
  maxUploadDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_taken_date" })
  minTakenDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_upload_date" })
  minUploadDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=privacy_filter" })
  privacyFilter?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe_search" })
  safeSearch?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId: string;
}


export class GetMediaByPersonId200ApplicationJson extends SpeakeasyBase {
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


export class GetMediaByPersonIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMediaByPersonIdQueryParams;
}


export class GetMediaByPersonIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMediaByPersonId200ApplicationJsonObject?: GetMediaByPersonId200ApplicationJson;
}
