import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserActivity extends SpeakeasyBase {
    activityType: string;
    persistentIdentifier?: string;
    title?: string;
    userInfo?: Map<string, any>;
    version: string;
}
