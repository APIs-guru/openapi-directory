import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchBehaviorsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchBehaviorsIdRequestBodyAttachmentFile extends SpeakeasyBase {
    attachmentFile: string;
    content: Uint8Array;
}
export declare class PatchBehaviorsIdRequestBody extends SpeakeasyBase {
    attachmentFile?: PatchBehaviorsIdRequestBodyAttachmentFile;
    behavior?: string;
    path?: string;
    value?: string;
}
export declare class PatchBehaviorsIdRequest extends SpeakeasyBase {
    pathParams: PatchBehaviorsIdPathParams;
    request?: PatchBehaviorsIdRequestBody;
}
export declare class PatchBehaviorsIdResponse extends SpeakeasyBase {
    behaviorEntity?: shared.BehaviorEntity;
    contentType: string;
    statusCode: number;
}
