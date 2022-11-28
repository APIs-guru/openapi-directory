import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TeamsListPathParams extends SpeakeasyBase {
    org: string;
}
export declare class TeamsListQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class TeamsListRequest extends SpeakeasyBase {
    pathParams: TeamsListPathParams;
    queryParams: TeamsListQueryParams;
}
export declare class TeamsListResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    teams?: shared.Team[];
}
