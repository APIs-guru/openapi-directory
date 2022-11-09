import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CommercialDetectionRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class CommercialDetectionRequest extends SpeakeasyBase {
    request?: CommercialDetectionRequestBody;
}
export declare class CommercialDetectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
