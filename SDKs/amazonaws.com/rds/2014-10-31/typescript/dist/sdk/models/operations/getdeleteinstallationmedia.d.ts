import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteInstallationMediaActionEnum {
    DeleteInstallationMedia = "DeleteInstallationMedia"
}
export declare enum GetDeleteInstallationMediaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteInstallationMediaQueryParams extends SpeakeasyBase {
    action: GetDeleteInstallationMediaActionEnum;
    installationMediaId: string;
    version: GetDeleteInstallationMediaVersionEnum;
}
export declare class GetDeleteInstallationMediaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteInstallationMediaRequest extends SpeakeasyBase {
    queryParams: GetDeleteInstallationMediaQueryParams;
    headers: GetDeleteInstallationMediaHeaders;
}
export declare class GetDeleteInstallationMediaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
