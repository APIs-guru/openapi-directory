import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesDeleteAllPathParams extends SpeakeasyBase {
    logId: string;
}
export declare class MessagesDeleteAllRequests extends SpeakeasyBase {
    search?: shared.Search;
    search1?: shared.Search;
    search2?: shared.Search;
    search3?: shared.Search;
}
export declare class MessagesDeleteAllRequest extends SpeakeasyBase {
    pathParams: MessagesDeleteAllPathParams;
    request?: MessagesDeleteAllRequests;
}
export declare class MessagesDeleteAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
