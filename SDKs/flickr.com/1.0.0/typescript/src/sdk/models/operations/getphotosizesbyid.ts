import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPhotoSizesByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;
}


export class GetPhotoSizesById200ApplicationJsonSizes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canblog" })
  canblog?: number;

  @SpeakeasyMetadata({ data: "json, name=candownload" })
  candownload?: number;

  @SpeakeasyMetadata({ data: "json, name=canprint" })
  canprint?: number;

  @SpeakeasyMetadata({ data: "json, name=sizes", elemType: shared.Size })
  sizes?: shared.Size[];
}


export class GetPhotoSizesById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sizes" })
  sizes?: GetPhotoSizesById200ApplicationJsonSizes;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPhotoSizesByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPhotoSizesByIdQueryParams;
}


export class GetPhotoSizesByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPhotoSizesById200ApplicationJsonObject?: GetPhotoSizesById200ApplicationJson;
}
