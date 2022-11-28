import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCustomKeyStoresXAmzTargetEnum {
    TrentServiceDescribeCustomKeyStores = "TrentService.DescribeCustomKeyStores"
}
export declare class DescribeCustomKeyStoresHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCustomKeyStoresXAmzTargetEnum;
}
export declare class DescribeCustomKeyStoresRequest extends SpeakeasyBase {
    headers: DescribeCustomKeyStoresHeaders;
    request: shared.DescribeCustomKeyStoresRequest;
}
export declare class DescribeCustomKeyStoresResponse extends SpeakeasyBase {
    contentType: string;
    customKeyStoreNotFoundException?: any;
    describeCustomKeyStoresResponse?: shared.DescribeCustomKeyStoresResponse;
    invalidMarkerException?: any;
    kmsInternalException?: any;
    statusCode: number;
}
