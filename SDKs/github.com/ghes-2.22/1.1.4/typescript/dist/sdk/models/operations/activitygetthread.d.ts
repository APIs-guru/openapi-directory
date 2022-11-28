import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityGetThreadPathParams extends SpeakeasyBase {
    threadId: number;
}
export declare class ActivityGetThreadRequest extends SpeakeasyBase {
    pathParams: ActivityGetThreadPathParams;
}
export declare class ActivityGetThreadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    thread?: shared.Thread;
}
