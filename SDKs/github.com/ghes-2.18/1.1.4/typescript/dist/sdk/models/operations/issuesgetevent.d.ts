import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IssuesGetEventPathParams extends SpeakeasyBase {
    eventId: number;
    owner: string;
    repo: string;
}
export declare class IssuesGetEventRequest extends SpeakeasyBase {
    pathParams: IssuesGetEventPathParams;
}
export declare class IssuesGetEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    issueEvent?: shared.IssueEvent;
}
