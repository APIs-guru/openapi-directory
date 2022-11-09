import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteInstallationMediaActionEnum {
    DeleteInstallationMedia = "DeleteInstallationMedia"
}
export declare enum PostDeleteInstallationMediaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteInstallationMediaQueryParams extends SpeakeasyBase {
    action: PostDeleteInstallationMediaActionEnum;
    version: PostDeleteInstallationMediaVersionEnum;
}
export declare class PostDeleteInstallationMediaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteInstallationMediaRequest extends SpeakeasyBase {
    queryParams: PostDeleteInstallationMediaQueryParams;
    headers: PostDeleteInstallationMediaHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteInstallationMediaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
