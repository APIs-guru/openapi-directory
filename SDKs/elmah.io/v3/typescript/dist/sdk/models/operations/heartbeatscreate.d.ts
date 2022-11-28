import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeartbeatsCreatePathParams extends SpeakeasyBase {
    id: string;
    logId: string;
}
export declare class HeartbeatsCreateRequests extends SpeakeasyBase {
    createHeartbeat?: shared.CreateHeartbeat;
    createHeartbeat1?: shared.CreateHeartbeat;
    createHeartbeat2?: shared.CreateHeartbeat;
    createHeartbeat3?: shared.CreateHeartbeat;
}
export declare class HeartbeatsCreateRequest extends SpeakeasyBase {
    pathParams: HeartbeatsCreatePathParams;
    request?: HeartbeatsCreateRequests;
}
export declare class HeartbeatsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
