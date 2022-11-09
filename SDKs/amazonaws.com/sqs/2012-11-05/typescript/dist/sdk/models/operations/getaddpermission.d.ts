import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetAddPermissionPathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetAddPermissionActionEnum {
    AddPermission = "AddPermission"
}
export declare enum GetAddPermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetAddPermissionQueryParams extends SpeakeasyBase {
    awsAccountIds: string[];
    action: GetAddPermissionActionEnum;
    actions: string[];
    label: string;
    version: GetAddPermissionVersionEnum;
}
export declare class GetAddPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAddPermissionRequest extends SpeakeasyBase {
    pathParams: GetAddPermissionPathParams;
    queryParams: GetAddPermissionQueryParams;
    headers: GetAddPermissionHeaders;
}
export declare class GetAddPermissionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
