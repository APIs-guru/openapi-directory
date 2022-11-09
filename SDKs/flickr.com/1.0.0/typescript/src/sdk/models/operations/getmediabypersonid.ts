import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMediaByPersonIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=content_type" })
  contentType?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_taken_date" })
  maxTakenDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_upload_date" })
  maxUploadDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_taken_date" })
  minTakenDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_upload_date" })
  minUploadDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=privacy_filter" })
  privacyFilter?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=safe_search" })
  safeSearch?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId: string;
}


export class GetMediaByPersonIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMediaByPersonIdQueryParams;
}


export class GetMediaByPersonId200ApplicationJson extends SpeakeasyBase {
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


export class GetMediaByPersonIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getMediaByPersonId200ApplicationJsonObject?: GetMediaByPersonId200ApplicationJson;
}
