import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteHsmConfigurationActionEnum {
    DeleteHsmConfiguration = "DeleteHsmConfiguration"
}
export declare enum PostDeleteHsmConfigurationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteHsmConfigurationQueryParams extends SpeakeasyBase {
    action: PostDeleteHsmConfigurationActionEnum;
    version: PostDeleteHsmConfigurationVersionEnum;
}
export declare class PostDeleteHsmConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteHsmConfigurationRequest extends SpeakeasyBase {
    queryParams: PostDeleteHsmConfigurationQueryParams;
    headers: PostDeleteHsmConfigurationHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteHsmConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
