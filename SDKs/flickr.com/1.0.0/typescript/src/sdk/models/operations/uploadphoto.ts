import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UploadPhotoRequestBodyContentTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}

export enum UploadPhotoRequestBodyHiddenEnum {
    One = "1",
    Two = "2"
}

export enum UploadPhotoRequestBodyIsFamilyEnum {
    Zero = "0",
    One = "1"
}

export enum UploadPhotoRequestBodyIsFriendEnum {
    Zero = "0",
    One = "1"
}

export enum UploadPhotoRequestBodyIsPublicEnum {
    Zero = "0",
    One = "1"
}


export class UploadPhotoRequestBodyPhoto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=photo" })
  photo: string;
}

export enum UploadPhotoRequestBodySafetyLevelEnum {
    One = "1",
    Two = "2",
    Three = "3"
}


export class UploadPhotoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=content_type" })
  contentType?: UploadPhotoRequestBodyContentTypeEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=hidden" })
  hidden?: UploadPhotoRequestBodyHiddenEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=is_family" })
  isFamily?: UploadPhotoRequestBodyIsFamilyEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=is_friend" })
  isFriend?: UploadPhotoRequestBodyIsFriendEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=is_public" })
  isPublic?: UploadPhotoRequestBodyIsPublicEnum;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  photo: UploadPhotoRequestBodyPhoto;

  @SpeakeasyMetadata({ data: "multipart_form, name=safety_level" })
  safetyLevel?: UploadPhotoRequestBodySafetyLevelEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=title" })
  title?: string;
}


export class UploadPhotoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UploadPhotoRequestBody;
}


export class UploadPhotoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  uploadPhoto200ApplicationJsonObject?: Map<string, any>;
}
