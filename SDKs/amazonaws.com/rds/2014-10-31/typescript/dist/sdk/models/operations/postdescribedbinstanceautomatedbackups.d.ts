import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeDbInstanceAutomatedBackupsActionEnum {
    DescribeDbInstanceAutomatedBackups = "DescribeDBInstanceAutomatedBackups"
}
export declare enum PostDescribeDbInstanceAutomatedBackupsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeDbInstanceAutomatedBackupsQueryParams extends SpeakeasyBase {
    action: PostDescribeDbInstanceAutomatedBackupsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeDbInstanceAutomatedBackupsVersionEnum;
}
export declare class PostDescribeDbInstanceAutomatedBackupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeDbInstanceAutomatedBackupsRequest extends SpeakeasyBase {
    queryParams: PostDescribeDbInstanceAutomatedBackupsQueryParams;
    headers: PostDescribeDbInstanceAutomatedBackupsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeDbInstanceAutomatedBackupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
