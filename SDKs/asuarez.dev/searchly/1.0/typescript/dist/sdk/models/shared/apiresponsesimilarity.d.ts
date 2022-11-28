import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Song similarity item.
**/
export declare class ApiResponseSimilarityResponseSimilarityList extends SpeakeasyBase {
    artistName?: string;
    artistUrl?: string;
    id?: number;
    indexId?: number;
    lyrics?: string;
    percentage?: number;
    songName?: string;
    songUrl?: string;
}
/**
 * Contains the response data if the request was successful.
**/
export declare class ApiResponseSimilarityResponse extends SpeakeasyBase {
    similarityList?: ApiResponseSimilarityResponseSimilarityList[];
}
export declare class ApiResponseSimilarity extends SpeakeasyBase {
    error?: boolean;
    message?: string;
    response?: ApiResponseSimilarityResponse;
}
