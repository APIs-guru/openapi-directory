import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteOptionGroupActionEnum {
    DeleteOptionGroup = "DeleteOptionGroup"
}
export declare enum GetDeleteOptionGroupVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class GetDeleteOptionGroupQueryParams extends SpeakeasyBase {
    action: GetDeleteOptionGroupActionEnum;
    optionGroupName: string;
    version: GetDeleteOptionGroupVersionEnum;
}
export declare class GetDeleteOptionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteOptionGroupRequest extends SpeakeasyBase {
    queryParams: GetDeleteOptionGroupQueryParams;
    headers: GetDeleteOptionGroupHeaders;
}
export declare class GetDeleteOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
