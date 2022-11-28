import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchMessagesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PatchMessagesIdRequestBody extends SpeakeasyBase {
    body: string;
    projectId: number;
    subject: string;
}
export declare class PatchMessagesIdRequest extends SpeakeasyBase {
    pathParams: PatchMessagesIdPathParams;
    request: PatchMessagesIdRequestBody;
}
export declare class PatchMessagesIdResponse extends SpeakeasyBase {
    contentType: string;
    messageEntity?: shared.MessageEntity;
    statusCode: number;
}
