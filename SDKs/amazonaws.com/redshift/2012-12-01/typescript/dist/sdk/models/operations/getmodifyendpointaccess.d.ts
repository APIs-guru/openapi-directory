import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyEndpointAccessActionEnum {
    ModifyEndpointAccess = "ModifyEndpointAccess"
}
export declare enum GetModifyEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyEndpointAccessQueryParams extends SpeakeasyBase {
    action: GetModifyEndpointAccessActionEnum;
    endpointName: string;
    version: GetModifyEndpointAccessVersionEnum;
    vpcSecurityGroupIds?: string[];
}
export declare class GetModifyEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyEndpointAccessRequest extends SpeakeasyBase {
    queryParams: GetModifyEndpointAccessQueryParams;
    headers: GetModifyEndpointAccessHeaders;
}
export declare class GetModifyEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
