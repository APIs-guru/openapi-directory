import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFbsTeamsQueryParams extends SpeakeasyBase {
    year?: number;
}
export declare class GetFbsTeamsRequest extends SpeakeasyBase {
    queryParams: GetFbsTeamsQueryParams;
}
export declare class GetFbsTeamsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teams?: shared.Team[];
}
