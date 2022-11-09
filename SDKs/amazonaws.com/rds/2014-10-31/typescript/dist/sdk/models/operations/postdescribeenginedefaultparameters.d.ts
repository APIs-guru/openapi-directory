import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeEngineDefaultParametersActionEnum {
    DescribeEngineDefaultParameters = "DescribeEngineDefaultParameters"
}
export declare enum PostDescribeEngineDefaultParametersVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeEngineDefaultParametersQueryParams extends SpeakeasyBase {
    action: PostDescribeEngineDefaultParametersActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeEngineDefaultParametersVersionEnum;
}
export declare class PostDescribeEngineDefaultParametersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEngineDefaultParametersRequest extends SpeakeasyBase {
    queryParams: PostDescribeEngineDefaultParametersQueryParams;
    headers: PostDescribeEngineDefaultParametersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEngineDefaultParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
