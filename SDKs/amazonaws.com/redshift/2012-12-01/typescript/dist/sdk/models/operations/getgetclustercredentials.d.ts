import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGetClusterCredentialsActionEnum {
    GetClusterCredentials = "GetClusterCredentials"
}
export declare enum GetGetClusterCredentialsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetGetClusterCredentialsQueryParams extends SpeakeasyBase {
    action: GetGetClusterCredentialsActionEnum;
    autoCreate?: boolean;
    clusterIdentifier: string;
    dbGroups?: string[];
    dbName?: string;
    dbUser: string;
    durationSeconds?: number;
    version: GetGetClusterCredentialsVersionEnum;
}
export declare class GetGetClusterCredentialsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetClusterCredentialsRequest extends SpeakeasyBase {
    queryParams: GetGetClusterCredentialsQueryParams;
    headers: GetGetClusterCredentialsHeaders;
}
export declare class GetGetClusterCredentialsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
