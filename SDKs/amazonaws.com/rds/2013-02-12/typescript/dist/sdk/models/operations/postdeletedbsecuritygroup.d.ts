import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteDbSecurityGroupActionEnum {
    DeleteDbSecurityGroup = "DeleteDBSecurityGroup"
}
export declare enum PostDeleteDbSecurityGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class PostDeleteDbSecurityGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteDbSecurityGroupActionEnum;
    version: PostDeleteDbSecurityGroupVersionEnum;
}
export declare class PostDeleteDbSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbSecurityGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbSecurityGroupQueryParams;
    headers: PostDeleteDbSecurityGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
