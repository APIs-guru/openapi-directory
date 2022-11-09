import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyCertificatesActionEnum {
    ModifyCertificates = "ModifyCertificates"
}
export declare enum GetModifyCertificatesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyCertificatesQueryParams extends SpeakeasyBase {
    action: GetModifyCertificatesActionEnum;
    certificateIdentifier?: string;
    removeCustomerOverride?: boolean;
    version: GetModifyCertificatesVersionEnum;
}
export declare class GetModifyCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyCertificatesRequest extends SpeakeasyBase {
    queryParams: GetModifyCertificatesQueryParams;
    headers: GetModifyCertificatesHeaders;
}
export declare class GetModifyCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
