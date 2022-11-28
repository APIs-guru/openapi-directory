import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateOptionGroupActionEnum {
    CreateOptionGroup = "CreateOptionGroup"
}
export declare enum GetCreateOptionGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GetCreateOptionGroupQueryParams extends SpeakeasyBase {
    action: GetCreateOptionGroupActionEnum;
    engineName: string;
    majorEngineVersion: string;
    optionGroupDescription: string;
    optionGroupName: string;
    version: GetCreateOptionGroupVersionEnum;
}
export declare class GetCreateOptionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateOptionGroupRequest extends SpeakeasyBase {
    queryParams: GetCreateOptionGroupQueryParams;
    headers: GetCreateOptionGroupHeaders;
}
export declare class GetCreateOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
