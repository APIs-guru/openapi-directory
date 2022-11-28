import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetImportInstallationMediaActionEnum {
    ImportInstallationMedia = "ImportInstallationMedia"
}
export declare enum GetImportInstallationMediaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetImportInstallationMediaQueryParams extends SpeakeasyBase {
    action: GetImportInstallationMediaActionEnum;
    customAvailabilityZoneId: string;
    engine: string;
    engineInstallationMediaPath: string;
    engineVersion: string;
    osInstallationMediaPath: string;
    version: GetImportInstallationMediaVersionEnum;
}
export declare class GetImportInstallationMediaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImportInstallationMediaRequest extends SpeakeasyBase {
    queryParams: GetImportInstallationMediaQueryParams;
    headers: GetImportInstallationMediaHeaders;
}
export declare class GetImportInstallationMediaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
