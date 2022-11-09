import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeEngineDefaultClusterParametersActionEnum {
    DescribeEngineDefaultClusterParameters = "DescribeEngineDefaultClusterParameters"
}
export declare enum PostDescribeEngineDefaultClusterParametersVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeEngineDefaultClusterParametersQueryParams extends SpeakeasyBase {
    action: PostDescribeEngineDefaultClusterParametersActionEnum;
    version: PostDescribeEngineDefaultClusterParametersVersionEnum;
}
export declare class PostDescribeEngineDefaultClusterParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEngineDefaultClusterParametersRequest extends SpeakeasyBase {
    queryParams: PostDescribeEngineDefaultClusterParametersQueryParams;
    headers: PostDescribeEngineDefaultClusterParametersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEngineDefaultClusterParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
