import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteHsmConfigurationActionEnum {
    DeleteHsmConfiguration = "DeleteHsmConfiguration"
}
export declare enum GetDeleteHsmConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteHsmConfigurationQueryParams extends SpeakeasyBase {
    action: GetDeleteHsmConfigurationActionEnum;
    hsmConfigurationIdentifier: string;
    version: GetDeleteHsmConfigurationVersionEnum;
}
export declare class GetDeleteHsmConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteHsmConfigurationRequest extends SpeakeasyBase {
    queryParams: GetDeleteHsmConfigurationQueryParams;
    headers: GetDeleteHsmConfigurationHeaders;
}
export declare class GetDeleteHsmConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
