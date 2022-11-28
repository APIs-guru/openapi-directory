import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeletePartnerActionEnum {
    DeletePartner = "DeletePartner"
}
export declare enum GetDeletePartnerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeletePartnerQueryParams extends SpeakeasyBase {
    accountId: string;
    action: GetDeletePartnerActionEnum;
    clusterIdentifier: string;
    databaseName: string;
    partnerName: string;
    version: GetDeletePartnerVersionEnum;
}
export declare class GetDeletePartnerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeletePartnerRequest extends SpeakeasyBase {
    queryParams: GetDeletePartnerQueryParams;
    headers: GetDeletePartnerHeaders;
}
export declare class GetDeletePartnerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
