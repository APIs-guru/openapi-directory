import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPhotoExifByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    photoId: string;
    secret?: string;
}
export declare class GetPhotoExifById200ApplicationJsonPhotoExifRaw extends SpeakeasyBase {
    content?: string;
}
export declare class GetPhotoExifById200ApplicationJsonPhotoExif extends SpeakeasyBase {
    label?: string;
    raw?: GetPhotoExifById200ApplicationJsonPhotoExifRaw;
    tag?: string;
    tagspace?: string;
    tagspaceid?: string;
}
export declare class GetPhotoExifById200ApplicationJsonPhoto extends SpeakeasyBase {
    camera?: string;
    exif?: GetPhotoExifById200ApplicationJsonPhotoExif[];
    farm?: string;
    id?: string;
    secret?: string;
    server?: string;
}
export declare class GetPhotoExifById200ApplicationJson extends SpeakeasyBase {
    photo?: GetPhotoExifById200ApplicationJsonPhoto;
    stat?: string;
}
export declare class GetPhotoExifByIdRequest extends SpeakeasyBase {
    queryParams: GetPhotoExifByIdQueryParams;
}
export declare class GetPhotoExifByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPhotoExifById200ApplicationJsonObject?: GetPhotoExifById200ApplicationJson;
}
