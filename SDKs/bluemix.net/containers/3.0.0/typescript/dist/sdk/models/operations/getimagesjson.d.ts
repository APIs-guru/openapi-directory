import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetImagesJsonHeaders extends SpeakeasyBase {
    xAuthProjectId: string;
    xAuthToken: string;
}
export declare class GetImagesJsonRequest extends SpeakeasyBase {
    headers: GetImagesJsonHeaders;
}
export declare class GetImagesJsonResponse extends SpeakeasyBase {
    contentType: string;
    imageInfo?: any;
    statusCode: number;
}
