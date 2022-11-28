import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeamsQueryParams extends SpeakeasyBase {
    conference?: string;
}
export declare class GetTeamsRequest extends SpeakeasyBase {
    queryParams: GetTeamsQueryParams;
}
export declare class GetTeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: shared.Team[];
}
