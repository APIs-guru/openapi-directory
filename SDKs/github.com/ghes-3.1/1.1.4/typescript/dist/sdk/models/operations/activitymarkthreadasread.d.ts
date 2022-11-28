import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivityMarkThreadAsReadPathParams extends SpeakeasyBase {
    threadId: number;
}
export declare class ActivityMarkThreadAsReadRequest extends SpeakeasyBase {
    pathParams: ActivityMarkThreadAsReadPathParams;
}
export declare class ActivityMarkThreadAsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
