import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyScheduledActionActionEnum {
    ModifyScheduledAction = "ModifyScheduledAction"
}
export declare enum PostModifyScheduledActionVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyScheduledActionQueryParams extends SpeakeasyBase {
    action: PostModifyScheduledActionActionEnum;
    version: PostModifyScheduledActionVersionEnum;
}
export declare class PostModifyScheduledActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyScheduledActionRequest extends SpeakeasyBase {
    queryParams: PostModifyScheduledActionQueryParams;
    headers: PostModifyScheduledActionHeaders;
    request?: Uint8Array;
}
export declare class PostModifyScheduledActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
