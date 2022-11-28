import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBehaviorsRequestBodyAttachmentFile extends SpeakeasyBase {
    attachmentFile: string;
    content: Uint8Array;
}
export declare class PostBehaviorsRequestBody extends SpeakeasyBase {
    attachmentFile?: PostBehaviorsRequestBodyAttachmentFile;
    behavior: string;
    path: string;
    value?: string;
}
export declare class PostBehaviorsRequest extends SpeakeasyBase {
    request?: PostBehaviorsRequestBody;
}
export declare class PostBehaviorsResponse extends SpeakeasyBase {
    behaviorEntity?: shared.BehaviorEntity;
    contentType: string;
    statusCode: number;
}
