import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GenderDetectionRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class GenderDetectionRequest extends SpeakeasyBase {
    request?: GenderDetectionRequestBody;
}
export declare class GenderDetectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
