import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeClustersActionEnum {
    DescribeClusters = "DescribeClusters"
}
export declare enum GetDescribeClustersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeClustersQueryParams extends SpeakeasyBase {
    action: GetDescribeClustersActionEnum;
    clusterIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
    version: GetDescribeClustersVersionEnum;
}
export declare class GetDescribeClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeClustersRequest extends SpeakeasyBase {
    queryParams: GetDescribeClustersQueryParams;
    headers: GetDescribeClustersHeaders;
}
export declare class GetDescribeClustersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
