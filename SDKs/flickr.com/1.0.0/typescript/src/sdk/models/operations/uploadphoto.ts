import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UploadPhotoRequestBodyContentTypeEnum {
    One = "1"
,    Two = "2"
,    Three = "3"
}

export enum UploadPhotoRequestBodyHiddenEnum {
    One = "1"
,    Two = "2"
}

export enum UploadPhotoRequestBodyIsFamilyEnum {
    Zero = "0"
,    One = "1"
}

export enum UploadPhotoRequestBodyIsFriendEnum {
    Zero = "0"
,    One = "1"
}

export enum UploadPhotoRequestBodyIsPublicEnum {
    Zero = "0"
,    One = "1"
}


export class UploadPhotoRequestBodyPhoto extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=photo" })
  photo: string;
}

export enum UploadPhotoRequestBodySafetyLevelEnum {
    One = "1"
,    Two = "2"
,    Three = "3"
}


export class UploadPhotoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=api_key" })
  apiKey: string;

  @Metadata({ data: "multipart_form, name=content_type" })
  contentType?: UploadPhotoRequestBodyContentTypeEnum;

  @Metadata({ data: "multipart_form, name=description" })
  description?: string;

  @Metadata({ data: "multipart_form, name=hidden" })
  hidden?: UploadPhotoRequestBodyHiddenEnum;

  @Metadata({ data: "multipart_form, name=is_family" })
  isFamily?: UploadPhotoRequestBodyIsFamilyEnum;

  @Metadata({ data: "multipart_form, name=is_friend" })
  isFriend?: UploadPhotoRequestBodyIsFriendEnum;

  @Metadata({ data: "multipart_form, name=is_public" })
  isPublic?: UploadPhotoRequestBodyIsPublicEnum;

  @Metadata({ data: "multipart_form, file=true" })
  photo: UploadPhotoRequestBodyPhoto;

  @Metadata({ data: "multipart_form, name=safety_level" })
  safetyLevel?: UploadPhotoRequestBodySafetyLevelEnum;

  @Metadata({ data: "multipart_form, name=tags" })
  tags?: string;

  @Metadata({ data: "multipart_form, name=title" })
  title?: string;
}


export class UploadPhotoRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UploadPhotoRequestBody;
}


export class UploadPhotoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadPhoto200ApplicationJsonObject?: Map<string, any>;
}
