import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UndoArchiveConversationPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class UndoArchiveConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UndoArchiveConversationRequest extends SpeakeasyBase {
    pathParams: UndoArchiveConversationPathParams;
    security: UndoArchiveConversationSecurity;
}
export declare class UndoArchiveConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
