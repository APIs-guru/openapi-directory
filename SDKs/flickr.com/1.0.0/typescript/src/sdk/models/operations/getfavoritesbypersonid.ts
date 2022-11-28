import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFavoritesByPersonIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_fave_date" })
  maxFaveDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_fave_date" })
  minFaveDate?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId: string;
}


export class GetFavoritesByPersonId200ApplicationJson extends SpeakeasyBase {
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


export class GetFavoritesByPersonIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFavoritesByPersonIdQueryParams;
}


export class GetFavoritesByPersonIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFavoritesByPersonId200ApplicationJsonObject?: GetFavoritesByPersonId200ApplicationJson;
}
