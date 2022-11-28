import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribePlaceIndexPathParams extends SpeakeasyBase {
    indexName: string;
}
export declare class DescribePlaceIndexHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribePlaceIndexRequest extends SpeakeasyBase {
    pathParams: DescribePlaceIndexPathParams;
    headers: DescribePlaceIndexHeaders;
}
export declare class DescribePlaceIndexResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describePlaceIndexResponse?: shared.DescribePlaceIndexResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
