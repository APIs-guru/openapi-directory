import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPutCompositeAlarmActionEnum {
    PutCompositeAlarm = "PutCompositeAlarm"
}
export declare enum PostPutCompositeAlarmVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostPutCompositeAlarmQueryParams extends SpeakeasyBase {
    action: PostPutCompositeAlarmActionEnum;
    version: PostPutCompositeAlarmVersionEnum;
}
export declare class PostPutCompositeAlarmHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPutCompositeAlarmRequest extends SpeakeasyBase {
    queryParams: PostPutCompositeAlarmQueryParams;
    headers: PostPutCompositeAlarmHeaders;
    request?: Uint8Array;
}
export declare class PostPutCompositeAlarmResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
