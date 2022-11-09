import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPhotoSizesByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;
}


export class GetPhotoSizesByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPhotoSizesByIdQueryParams;
}


export class GetPhotoSizesById200ApplicationJsonSizes extends SpeakeasyBase {
  @Metadata({ data: "json, name=canblog" })
  canblog?: number;

  @Metadata({ data: "json, name=candownload" })
  candownload?: number;

  @Metadata({ data: "json, name=canprint" })
  canprint?: number;

  @Metadata({ data: "json, name=sizes", elemType: shared.Size })
  sizes?: shared.Size[];
}


export class GetPhotoSizesById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=sizes" })
  sizes?: GetPhotoSizesById200ApplicationJsonSizes;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPhotoSizesByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPhotoSizesById200ApplicationJsonObject?: GetPhotoSizesById200ApplicationJson;
}
