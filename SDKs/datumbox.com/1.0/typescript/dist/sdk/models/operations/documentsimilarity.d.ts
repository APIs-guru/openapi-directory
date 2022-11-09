import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DocumentSimilarityRequestBody extends SpeakeasyBase {
    apiKey: string;
    copy?: string;
    original?: string;
}
export declare class DocumentSimilarityRequest extends SpeakeasyBase {
    request?: DocumentSimilarityRequestBody;
}
export declare class DocumentSimilarityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
