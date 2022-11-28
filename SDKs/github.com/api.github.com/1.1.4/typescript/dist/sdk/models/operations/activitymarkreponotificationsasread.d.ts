import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActivityMarkRepoNotificationsAsReadPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActivityMarkRepoNotificationsAsReadRequestBody extends SpeakeasyBase {
    lastReadAt?: string;
}
export declare class ActivityMarkRepoNotificationsAsReadRequest extends SpeakeasyBase {
    pathParams: ActivityMarkRepoNotificationsAsReadPathParams;
    request?: ActivityMarkRepoNotificationsAsReadRequestBody;
}
export declare class ActivityMarkRepoNotificationsAsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
