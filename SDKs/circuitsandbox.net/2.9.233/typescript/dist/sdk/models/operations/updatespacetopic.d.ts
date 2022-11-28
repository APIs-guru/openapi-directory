import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSpaceTopicPathParams extends SpeakeasyBase {
    spaceId: string;
    topicId: string;
}
export declare class UpdateSpaceTopicRequestBody extends SpeakeasyBase {
    attachments?: string[];
    complex?: boolean;
    content?: string;
    contentTags?: string[];
    formMetaData?: string;
    mentionedUsers?: string[];
    subject?: string;
    tags?: string[];
}
export declare class UpdateSpaceTopicSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateSpaceTopicRequest extends SpeakeasyBase {
    pathParams: UpdateSpaceTopicPathParams;
    request?: UpdateSpaceTopicRequestBody;
    security: UpdateSpaceTopicSecurity;
}
export declare class UpdateSpaceTopicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    spaceTopic?: any;
    statusCode: number;
}
