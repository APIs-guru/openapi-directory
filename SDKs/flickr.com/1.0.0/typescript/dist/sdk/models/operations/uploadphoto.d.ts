import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UploadPhotoRequestBodyContentTypeEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare enum UploadPhotoRequestBodyHiddenEnum {
    One = "1",
    Two = "2"
}
export declare enum UploadPhotoRequestBodyIsFamilyEnum {
    Zero = "0",
    One = "1"
}
export declare enum UploadPhotoRequestBodyIsFriendEnum {
    Zero = "0",
    One = "1"
}
export declare enum UploadPhotoRequestBodyIsPublicEnum {
    Zero = "0",
    One = "1"
}
export declare class UploadPhotoRequestBodyPhoto extends SpeakeasyBase {
    content: Uint8Array;
    photo: string;
}
export declare enum UploadPhotoRequestBodySafetyLevelEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class UploadPhotoRequestBody extends SpeakeasyBase {
    apiKey: string;
    contentType?: UploadPhotoRequestBodyContentTypeEnum;
    description?: string;
    hidden?: UploadPhotoRequestBodyHiddenEnum;
    isFamily?: UploadPhotoRequestBodyIsFamilyEnum;
    isFriend?: UploadPhotoRequestBodyIsFriendEnum;
    isPublic?: UploadPhotoRequestBodyIsPublicEnum;
    photo: UploadPhotoRequestBodyPhoto;
    safetyLevel?: UploadPhotoRequestBodySafetyLevelEnum;
    tags?: string;
    title?: string;
}
export declare class UploadPhotoRequest extends SpeakeasyBase {
    request: UploadPhotoRequestBody;
}
export declare class UploadPhotoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadPhoto200ApplicationJsonObject?: Map<string, any>;
}
