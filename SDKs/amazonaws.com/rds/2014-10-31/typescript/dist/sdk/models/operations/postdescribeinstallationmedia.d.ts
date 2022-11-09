import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeInstallationMediaActionEnum {
    DescribeInstallationMedia = "DescribeInstallationMedia"
}
export declare enum PostDescribeInstallationMediaVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeInstallationMediaQueryParams extends SpeakeasyBase {
    action: PostDescribeInstallationMediaActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeInstallationMediaVersionEnum;
}
export declare class PostDescribeInstallationMediaHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeInstallationMediaRequest extends SpeakeasyBase {
    queryParams: PostDescribeInstallationMediaQueryParams;
    headers: PostDescribeInstallationMediaHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeInstallationMediaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
