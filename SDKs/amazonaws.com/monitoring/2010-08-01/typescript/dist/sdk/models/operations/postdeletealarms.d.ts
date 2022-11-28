import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteAlarmsActionEnum {
    DeleteAlarms = "DeleteAlarms"
}
export declare enum PostDeleteAlarmsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDeleteAlarmsQueryParams extends SpeakeasyBase {
    action: PostDeleteAlarmsActionEnum;
    version: PostDeleteAlarmsVersionEnum;
}
export declare class PostDeleteAlarmsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteAlarmsRequest extends SpeakeasyBase {
    queryParams: PostDeleteAlarmsQueryParams;
    headers: PostDeleteAlarmsHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteAlarmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
