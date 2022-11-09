import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFavoritesByPersonIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_fave_date" })
  maxFaveDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_fave_date" })
  minFaveDate?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId: string;
}


export class GetFavoritesByPersonIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFavoritesByPersonIdQueryParams;
}


export class GetFavoritesByPersonId200ApplicationJson extends SpeakeasyBase {
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


export class GetFavoritesByPersonIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFavoritesByPersonId200ApplicationJsonObject?: GetFavoritesByPersonId200ApplicationJson;
}
