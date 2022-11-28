import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddMembersForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class AddMembersForProjectQueryParams extends SpeakeasyBase {
    optFields?: string[];
    optPretty?: boolean;
}
export declare class AddMembersForProjectRequestBody extends SpeakeasyBase {
    data?: shared.AddMembersRequest;
}
export declare class AddMembersForProject200ApplicationJson extends SpeakeasyBase {
    data?: Map<string, any>;
}
export declare class AddMembersForProjectRequest extends SpeakeasyBase {
    pathParams: AddMembersForProjectPathParams;
    queryParams: AddMembersForProjectQueryParams;
    request: AddMembersForProjectRequestBody;
}
export declare class AddMembersForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    addMembersForProject200ApplicationJsonObject?: AddMembersForProject200ApplicationJson;
}
