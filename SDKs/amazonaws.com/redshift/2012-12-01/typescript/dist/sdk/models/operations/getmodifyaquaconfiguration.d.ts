import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyAquaConfigurationActionEnum {
    ModifyAquaConfiguration = "ModifyAquaConfiguration"
}
export declare enum GetModifyAquaConfigurationAquaConfigurationStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Auto = "auto"
}
export declare enum GetModifyAquaConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyAquaConfigurationQueryParams extends SpeakeasyBase {
    action: GetModifyAquaConfigurationActionEnum;
    aquaConfigurationStatus?: GetModifyAquaConfigurationAquaConfigurationStatusEnum;
    clusterIdentifier: string;
    version: GetModifyAquaConfigurationVersionEnum;
}
export declare class GetModifyAquaConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyAquaConfigurationRequest extends SpeakeasyBase {
    queryParams: GetModifyAquaConfigurationQueryParams;
    headers: GetModifyAquaConfigurationHeaders;
}
export declare class GetModifyAquaConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
