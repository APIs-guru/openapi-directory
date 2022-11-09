import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListCodeSigningConfigsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: number;
}
export declare class ListCodeSigningConfigsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCodeSigningConfigsRequest extends SpeakeasyBase {
    queryParams: ListCodeSigningConfigsQueryParams;
    headers: ListCodeSigningConfigsHeaders;
}
export declare class ListCodeSigningConfigsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValueException?: any;
    listCodeSigningConfigsResponse?: shared.ListCodeSigningConfigsResponse;
    serviceException?: any;
    statusCode: number;
}
