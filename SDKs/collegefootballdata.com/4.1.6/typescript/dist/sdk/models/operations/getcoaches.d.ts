import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCoachesQueryParams extends SpeakeasyBase {
    firstName?: string;
    lastName?: string;
    maxYear?: number;
    minYear?: number;
    team?: string;
    year?: number;
}
export declare class GetCoachesRequest extends SpeakeasyBase {
    queryParams: GetCoachesQueryParams;
}
export declare class GetCoachesResponse extends SpeakeasyBase {
    coaches?: shared.Coach[];
    contentType: string;
    statusCode: number;
}
