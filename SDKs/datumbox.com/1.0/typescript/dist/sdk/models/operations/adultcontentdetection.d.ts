import { SpeakeasyBase } from "../../../internal/utils";
export declare class AdultContentDetectionRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class AdultContentDetectionRequest extends SpeakeasyBase {
    request?: AdultContentDetectionRequestBody;
}
export declare class AdultContentDetectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
