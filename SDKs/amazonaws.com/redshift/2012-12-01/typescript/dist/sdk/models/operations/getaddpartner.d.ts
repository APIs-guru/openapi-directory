import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAddPartnerActionEnum {
    AddPartner = "AddPartner"
}
export declare enum GetAddPartnerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetAddPartnerQueryParams extends SpeakeasyBase {
    accountId: string;
    action: GetAddPartnerActionEnum;
    clusterIdentifier: string;
    databaseName: string;
    partnerName: string;
    version: GetAddPartnerVersionEnum;
}
export declare class GetAddPartnerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAddPartnerRequest extends SpeakeasyBase {
    queryParams: GetAddPartnerQueryParams;
    headers: GetAddPartnerHeaders;
}
export declare class GetAddPartnerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
