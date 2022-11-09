import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeValidDbInstanceModificationsActionEnum {
    DescribeValidDbInstanceModifications = "DescribeValidDBInstanceModifications"
}
export declare enum PostDescribeValidDbInstanceModificationsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeValidDbInstanceModificationsQueryParams extends SpeakeasyBase {
    action: PostDescribeValidDbInstanceModificationsActionEnum;
    version: PostDescribeValidDbInstanceModificationsVersionEnum;
}
export declare class PostDescribeValidDbInstanceModificationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeValidDbInstanceModificationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeValidDbInstanceModificationsQueryParams;
    headers: PostDescribeValidDbInstanceModificationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeValidDbInstanceModificationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
