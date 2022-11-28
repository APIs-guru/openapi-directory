import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetUpdatePartnerStatusActionEnum {
    UpdatePartnerStatus = "UpdatePartnerStatus"
}
export declare enum GetUpdatePartnerStatusStatusEnum {
    Active = "Active",
    Inactive = "Inactive",
    RuntimeFailure = "RuntimeFailure",
    ConnectionFailure = "ConnectionFailure"
}
export declare enum GetUpdatePartnerStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetUpdatePartnerStatusQueryParams extends SpeakeasyBase {
    accountId: string;
    action: GetUpdatePartnerStatusActionEnum;
    clusterIdentifier: string;
    databaseName: string;
    partnerName: string;
    status: GetUpdatePartnerStatusStatusEnum;
    statusMessage?: string;
    version: GetUpdatePartnerStatusVersionEnum;
}
export declare class GetUpdatePartnerStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetUpdatePartnerStatusRequest extends SpeakeasyBase {
    queryParams: GetUpdatePartnerStatusQueryParams;
    headers: GetUpdatePartnerStatusHeaders;
}
export declare class GetUpdatePartnerStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
