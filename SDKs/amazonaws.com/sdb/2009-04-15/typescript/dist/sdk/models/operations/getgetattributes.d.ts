import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetAttributesActionEnum {
    GetAttributes = "GetAttributes"
}
export declare enum GetGetAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GetGetAttributesQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GetGetAttributesActionEnum;
    attributeNames?: string[];
    consistentRead?: boolean;
    domainName: string;
    itemName: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GetGetAttributesVersionEnum;
}
export declare class GetGetAttributesRequest extends SpeakeasyBase {
    queryParams: GetGetAttributesQueryParams;
}
export declare class GetGetAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
