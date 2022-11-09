import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSearchV1OrganicQueryParams extends SpeakeasyBase {
    callback?: string;
    field?: string;
    q?: string;
    size?: number;
    totalOnly?: boolean;
}
export declare class GetSearchV1OrganicRequest extends SpeakeasyBase {
    queryParams: GetSearchV1OrganicQueryParams;
}
export declare class GetSearchV1OrganicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: any;
    organicResult?: shared.OrganicResult;
    statusCode: number;
}
