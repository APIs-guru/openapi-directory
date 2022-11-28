import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposListTeamsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposListTeamsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposListTeamsRequest extends SpeakeasyBase {
    pathParams: ReposListTeamsPathParams;
    queryParams: ReposListTeamsQueryParams;
}
export declare class ReposListTeamsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    teams?: shared.Team[];
}
