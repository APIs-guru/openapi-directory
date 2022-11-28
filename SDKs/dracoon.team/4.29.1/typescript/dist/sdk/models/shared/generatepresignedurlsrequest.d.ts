import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request model for generating presigned URLs
**/
export declare class GeneratePresignedUrlsRequest extends SpeakeasyBase {
    firstPartNumber: number;
    lastPartNumber: number;
    size: number;
}
