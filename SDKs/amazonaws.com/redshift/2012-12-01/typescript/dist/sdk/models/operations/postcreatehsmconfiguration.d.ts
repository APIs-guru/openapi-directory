import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateHsmConfigurationActionEnum {
    CreateHsmConfiguration = "CreateHsmConfiguration"
}
export declare enum PostCreateHsmConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateHsmConfigurationQueryParams extends SpeakeasyBase {
    action: PostCreateHsmConfigurationActionEnum;
    version: PostCreateHsmConfigurationVersionEnum;
}
export declare class PostCreateHsmConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateHsmConfigurationRequest extends SpeakeasyBase {
    queryParams: PostCreateHsmConfigurationQueryParams;
    headers: PostCreateHsmConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostCreateHsmConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
