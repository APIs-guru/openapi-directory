import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostImportInstallationMediaActionEnum {
    ImportInstallationMedia = "ImportInstallationMedia"
}
export declare enum PostImportInstallationMediaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostImportInstallationMediaQueryParams extends SpeakeasyBase {
    action: PostImportInstallationMediaActionEnum;
    version: PostImportInstallationMediaVersionEnum;
}
export declare class PostImportInstallationMediaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostImportInstallationMediaRequest extends SpeakeasyBase {
    queryParams: PostImportInstallationMediaQueryParams;
    headers: PostImportInstallationMediaHeaders;
    request?: Uint8Array;
}
export declare class PostImportInstallationMediaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
