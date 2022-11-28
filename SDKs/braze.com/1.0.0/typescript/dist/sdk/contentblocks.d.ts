import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ContentBlocks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listAvailableContentBlocks - List Available Content Blocks
     *
     * This endpoint will list existing Content Block information.
     *
     * ### Successful Response Properties
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR_REST_API_KEY
     * {
     *   "count": "integer",
     *   "content_blocks": [
     *     {
     *       "content_block_id": "string",
     *       "name": "string",
     *       "content_type": "html or text",
     *       "liquid_tag": "string",
     *       "inclusion_count" : "integer",
     *       "created_at": "time-in-iso",
     *       "last_edited": "time-in-iso",
     *       "tags" : "array of strings"
     *     }
     *   ]
     * }
     * ```
     *
     * ### Possible Errors
     * - `Modified after time is invalid.`
     * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
     *
     * - `Modified before time is invalid.`
     * The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
     *
     * - `Modified after time must be earlier than or the same as modified before time.`
     *
     * - `Content Block number limit is invalid.`
     * The `limit` parameter must be an integer (positive number) greater than 0.
     *
     * - `Content Block number limit must be greater than 0.`
     * The `limit` parameter must be an integer (positive number) greater than 0.
     *
     * - `Content Block number limit exceeds maximum of 1000.`
     * The `limit` parameter must be an integer (positive number) greater than 0.
     *
     * - `Offset is invalid.`
     * The `offset` parameter must be an integer (positive number) greater than 0.
     *
     * - `Offset must be greater than 0.`
     * The `offset` parameter must be an integer (positive number) greater than 0.
    **/
    listAvailableContentBlocks(req: operations.ListAvailableContentBlocksRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailableContentBlocksResponse>;
    /**
     * seeContentBlockInformation - See Content Block Information
     *
     * This endpoint will call information for an existing Content Block.
     *
     * ### Successful Response Properties
     * ```json
     * Content-Type: application/json
     * Authorization: Bearer YOUR_REST_API_KEY
     * {
     *   "content_block_id": "string",
     *   "name": "string",
     *   "content": "string",
     *   "description": "string",
     *   "content_type": "html or text",
     *   "tags":  "array of strings",
     *   "created_at": "time-in-iso",
     *   "last_edited": "time-in-iso",
     *   "inclusion_count" : "integer",
     *   "message": "success"
     * }
     * ```
     *
     * ### Possible Errors
     * - `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.
     *
     * - `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.
     *
     * - `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.
     *
     * - `Include Inclusion Data - error` - One of true or false is not provided.
    **/
    seeContentBlockInformation(req: operations.SeeContentBlockInformationRequest, config?: AxiosRequestConfig): Promise<operations.SeeContentBlockInformationResponse>;
}
