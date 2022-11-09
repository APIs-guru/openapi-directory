import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateDbSecurityGroupActionEnum {
    CreateDbSecurityGroup = "CreateDBSecurityGroup"
}
export declare enum PostCreateDbSecurityGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class PostCreateDbSecurityGroupQueryParams extends SpeakeasyBase {
    action: PostCreateDbSecurityGroupActionEnum;
    version: PostCreateDbSecurityGroupVersionEnum;
}
export declare class PostCreateDbSecurityGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbSecurityGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateDbSecurityGroupQueryParams;
    headers: PostCreateDbSecurityGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
