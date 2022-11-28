import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAuthorizeSnapshotAccessActionEnum {
    AuthorizeSnapshotAccess = "AuthorizeSnapshotAccess"
}
export declare enum GetAuthorizeSnapshotAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetAuthorizeSnapshotAccessQueryParams extends SpeakeasyBase {
    accountWithRestoreAccess: string;
    action: GetAuthorizeSnapshotAccessActionEnum;
    snapshotClusterIdentifier?: string;
    snapshotIdentifier: string;
    version: GetAuthorizeSnapshotAccessVersionEnum;
}
export declare class GetAuthorizeSnapshotAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAuthorizeSnapshotAccessRequest extends SpeakeasyBase {
    queryParams: GetAuthorizeSnapshotAccessQueryParams;
    headers: GetAuthorizeSnapshotAccessHeaders;
}
export declare class GetAuthorizeSnapshotAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
