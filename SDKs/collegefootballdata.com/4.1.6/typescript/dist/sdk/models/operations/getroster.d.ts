import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRosterQueryParams extends SpeakeasyBase {
    team?: string;
    year?: number;
}
export declare class GetRosterRequest extends SpeakeasyBase {
    queryParams: GetRosterQueryParams;
}
export declare class GetRosterResponse extends SpeakeasyBase {
    contentType: string;
    players?: shared.Player[];
    statusCode: number;
}
