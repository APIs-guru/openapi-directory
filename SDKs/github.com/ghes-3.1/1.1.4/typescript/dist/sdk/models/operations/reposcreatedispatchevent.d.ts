import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposCreateDispatchEventPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposCreateDispatchEventRequestBody extends SpeakeasyBase {
    clientPayload?: Map<string, any>;
    eventType: string;
}
export declare class ReposCreateDispatchEventRequest extends SpeakeasyBase {
    pathParams: ReposCreateDispatchEventPathParams;
    request?: ReposCreateDispatchEventRequestBody;
}
export declare class ReposCreateDispatchEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validationError?: shared.ValidationError;
}
