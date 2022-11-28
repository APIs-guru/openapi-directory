import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPhotoExifByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secret" })
  secret?: string;
}


export class GetPhotoExifById200ApplicationJsonPhotoExifRaw extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class GetPhotoExifById200ApplicationJsonPhotoExif extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=raw" })
  raw?: GetPhotoExifById200ApplicationJsonPhotoExifRaw;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;

  @SpeakeasyMetadata({ data: "json, name=tagspace" })
  tagspace?: string;

  @SpeakeasyMetadata({ data: "json, name=tagspaceid" })
  tagspaceid?: string;
}


export class GetPhotoExifById200ApplicationJsonPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=camera" })
  camera?: string;

  @SpeakeasyMetadata({ data: "json, name=exif", elemType: GetPhotoExifById200ApplicationJsonPhotoExif })
  exif?: GetPhotoExifById200ApplicationJsonPhotoExif[];

  @SpeakeasyMetadata({ data: "json, name=farm" })
  farm?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;
}


export class GetPhotoExifById200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=photo" })
  photo?: GetPhotoExifById200ApplicationJsonPhoto;

  @SpeakeasyMetadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPhotoExifByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPhotoExifByIdQueryParams;
}


export class GetPhotoExifByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPhotoExifById200ApplicationJsonObject?: GetPhotoExifById200ApplicationJson;
}
