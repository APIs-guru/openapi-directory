import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadAvatarPathParams extends SpeakeasyBase {
    userId: number;
    uuid: string;
}
export declare class DownloadAvatarRequest extends SpeakeasyBase {
    pathParams: DownloadAvatarPathParams;
}
export declare class DownloadAvatarResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    downloadAvatar200ApplicationOctetStreamString?: string;
}
