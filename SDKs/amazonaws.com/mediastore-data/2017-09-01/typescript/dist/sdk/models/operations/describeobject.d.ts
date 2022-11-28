import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeObjectPathParams extends SpeakeasyBase {
    path: string;
}
export declare class DescribeObjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeObjectRequest extends SpeakeasyBase {
    pathParams: DescribeObjectPathParams;
    headers: DescribeObjectHeaders;
}
export declare class DescribeObjectResponse extends SpeakeasyBase {
    containerNotFoundException?: any;
    contentType: string;
    describeObjectResponse?: Map<string, any>;
    internalServerError?: any;
    objectNotFoundException?: any;
    statusCode: number;
}
