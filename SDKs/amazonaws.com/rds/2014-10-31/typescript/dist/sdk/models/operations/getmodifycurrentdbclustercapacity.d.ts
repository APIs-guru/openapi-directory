import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyCurrentDbClusterCapacityActionEnum {
    ModifyCurrentDbClusterCapacity = "ModifyCurrentDBClusterCapacity"
}
export declare enum GetModifyCurrentDbClusterCapacityVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyCurrentDbClusterCapacityQueryParams extends SpeakeasyBase {
    action: GetModifyCurrentDbClusterCapacityActionEnum;
    capacity?: number;
    dbClusterIdentifier: string;
    secondsBeforeTimeout?: number;
    timeoutAction?: string;
    version: GetModifyCurrentDbClusterCapacityVersionEnum;
}
export declare class GetModifyCurrentDbClusterCapacityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyCurrentDbClusterCapacityRequest extends SpeakeasyBase {
    queryParams: GetModifyCurrentDbClusterCapacityQueryParams;
    headers: GetModifyCurrentDbClusterCapacityHeaders;
}
export declare class GetModifyCurrentDbClusterCapacityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
