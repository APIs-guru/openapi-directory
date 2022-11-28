import { SpeakeasyBase } from "../../../internal/utils";
import { TopicPreference } from "./topicpreference";
export declare class GetContactResponse extends SpeakeasyBase {
    attributesData?: string;
    contactListName?: string;
    createdTimestamp?: Date;
    emailAddress?: string;
    lastUpdatedTimestamp?: Date;
    topicDefaultPreferences?: TopicPreference[];
    topicPreferences?: TopicPreference[];
    unsubscribeAll?: boolean;
}
