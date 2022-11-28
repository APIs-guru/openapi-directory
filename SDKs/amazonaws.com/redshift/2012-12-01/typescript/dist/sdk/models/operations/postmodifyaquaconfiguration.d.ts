import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyAquaConfigurationActionEnum {
    ModifyAquaConfiguration = "ModifyAquaConfiguration"
}
export declare enum PostModifyAquaConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyAquaConfigurationQueryParams extends SpeakeasyBase {
    action: PostModifyAquaConfigurationActionEnum;
    version: PostModifyAquaConfigurationVersionEnum;
}
export declare class PostModifyAquaConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyAquaConfigurationRequest extends SpeakeasyBase {
    queryParams: PostModifyAquaConfigurationQueryParams;
    headers: PostModifyAquaConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostModifyAquaConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
