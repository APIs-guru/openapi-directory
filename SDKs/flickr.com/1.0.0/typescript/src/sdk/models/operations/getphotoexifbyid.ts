import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPhotoExifByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photo_id" })
  photoId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=secret" })
  secret?: string;
}


export class GetPhotoExifByIdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPhotoExifByIdQueryParams;
}


export class GetPhotoExifById200ApplicationJsonPhotoExifRaw extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class GetPhotoExifById200ApplicationJsonPhotoExif extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=raw" })
  raw?: GetPhotoExifById200ApplicationJsonPhotoExifRaw;

  @Metadata({ data: "json, name=tag" })
  tag?: string;

  @Metadata({ data: "json, name=tagspace" })
  tagspace?: string;

  @Metadata({ data: "json, name=tagspaceid" })
  tagspaceid?: string;
}


export class GetPhotoExifById200ApplicationJsonPhoto extends SpeakeasyBase {
  @Metadata({ data: "json, name=camera" })
  camera?: string;

  @Metadata({ data: "json, name=exif", elemType: operations.GetPhotoExifById200ApplicationJsonPhotoExif })
  exif?: GetPhotoExifById200ApplicationJsonPhotoExif[];

  @Metadata({ data: "json, name=farm" })
  farm?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=server" })
  server?: string;
}


export class GetPhotoExifById200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=photo" })
  photo?: GetPhotoExifById200ApplicationJsonPhoto;

  @Metadata({ data: "json, name=stat" })
  stat?: string;
}


export class GetPhotoExifByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPhotoExifById200ApplicationJsonObject?: GetPhotoExifById200ApplicationJson;
}
