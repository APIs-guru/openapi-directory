import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppPkgNotificationPostRequest extends SpeakeasyBase {
    request: shared.AppPkgNotification;
}
export declare class AppPkgNotificationPostResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: shared.ProblemDetails;
    statusCode: number;
}
