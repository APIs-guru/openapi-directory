import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListChildLegacyPathParams extends SpeakeasyBase {
    teamId: number;
}
export declare class TeamsListChildLegacyQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListChildLegacyRequest extends SpeakeasyBase {
    pathParams: TeamsListChildLegacyPathParams;
    queryParams: TeamsListChildLegacyQueryParams;
}
export declare class TeamsListChildLegacyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    teams?: shared.Team[];
    validationError?: shared.ValidationError;
}
