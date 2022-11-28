import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArchiveConversationPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class ArchiveConversationSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class ArchiveConversationRequest extends SpeakeasyBase {
    pathParams: ArchiveConversationPathParams;
    security: ArchiveConversationSecurity;
}
export declare class ArchiveConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
