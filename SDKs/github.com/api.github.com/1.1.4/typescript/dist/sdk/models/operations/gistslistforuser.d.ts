import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsListForUserPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GistsListForUserQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
    since?: string;
}
export declare class GistsListForUserRequest extends SpeakeasyBase {
    pathParams: GistsListForUserPathParams;
    queryParams: GistsListForUserQueryParams;
}
export declare class GistsListForUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    baseGists?: shared.BaseGist[];
    validationError?: shared.ValidationError;
}
