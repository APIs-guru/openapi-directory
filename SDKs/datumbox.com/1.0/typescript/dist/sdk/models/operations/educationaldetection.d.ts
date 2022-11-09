import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class EducationalDetectionRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class EducationalDetectionRequest extends SpeakeasyBase {
    request?: EducationalDetectionRequestBody;
}
export declare class EducationalDetectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
