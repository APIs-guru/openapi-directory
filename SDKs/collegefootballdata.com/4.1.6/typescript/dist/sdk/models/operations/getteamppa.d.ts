import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTeamPpaQueryParams extends SpeakeasyBase {
    conference?: string;
    excludeGarbageTime?: boolean;
    team?: string;
    year?: number;
}
export declare class GetTeamPpaRequest extends SpeakeasyBase {
    queryParams: GetTeamPpaQueryParams;
}
export declare class GetTeamPpaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    teamPpas?: shared.TeamPpa[];
}
