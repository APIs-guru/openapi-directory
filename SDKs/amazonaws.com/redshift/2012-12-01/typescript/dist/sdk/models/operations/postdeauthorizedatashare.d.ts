import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeauthorizeDataShareActionEnum {
    DeauthorizeDataShare = "DeauthorizeDataShare"
}
export declare enum PostDeauthorizeDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeauthorizeDataShareQueryParams extends SpeakeasyBase {
    action: PostDeauthorizeDataShareActionEnum;
    version: PostDeauthorizeDataShareVersionEnum;
}
export declare class PostDeauthorizeDataShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeauthorizeDataShareRequest extends SpeakeasyBase {
    queryParams: PostDeauthorizeDataShareQueryParams;
    headers: PostDeauthorizeDataShareHeaders;
    request?: Uint8Array;
}
export declare class PostDeauthorizeDataShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
