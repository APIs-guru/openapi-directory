import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSpaceTopicPathParams extends SpeakeasyBase {
    spaceId: string;
}
export declare class CreateSpaceTopicRequestBody extends SpeakeasyBase {
    attachments?: string[];
    complex?: boolean;
    content?: string;
    contentTags?: string[];
    formMetaData?: string;
    mentionedUser?: string;
    subject: string;
    tags?: string[];
}
export declare class CreateSpaceTopicSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class CreateSpaceTopicRequest extends SpeakeasyBase {
    pathParams: CreateSpaceTopicPathParams;
    request: CreateSpaceTopicRequestBody;
    security: CreateSpaceTopicSecurity;
}
export declare class CreateSpaceTopicResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    spaceTopic?: any;
    statusCode: number;
}
