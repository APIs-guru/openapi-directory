import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetRemovePermissionPathParams extends SpeakeasyBase {
    accountNumber: number;
    queueName: string;
}
export declare enum GetRemovePermissionActionEnum {
    RemovePermission = "RemovePermission"
}
export declare enum GetRemovePermissionVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class GetRemovePermissionQueryParams extends SpeakeasyBase {
    action: GetRemovePermissionActionEnum;
    label: string;
    version: GetRemovePermissionVersionEnum;
}
export declare class GetRemovePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRemovePermissionRequest extends SpeakeasyBase {
    pathParams: GetRemovePermissionPathParams;
    queryParams: GetRemovePermissionQueryParams;
    headers: GetRemovePermissionHeaders;
}
export declare class GetRemovePermissionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
