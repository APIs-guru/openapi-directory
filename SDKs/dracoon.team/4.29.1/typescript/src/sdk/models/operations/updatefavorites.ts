import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateFavoritesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UpdateFavoritesRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateFavoritesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateFavoritesBulkRequest;
}


export class UpdateFavoritesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
