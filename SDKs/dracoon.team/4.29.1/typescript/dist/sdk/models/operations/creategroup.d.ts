import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    headers: CreateGroupHeaders;
    request: shared.CreateGroupRequest;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    group?: shared.Group;
    statusCode: number;
}
