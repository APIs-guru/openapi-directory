import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWinProbabilityDataQueryParams extends SpeakeasyBase {
    gameId: number;
}
export declare class GetWinProbabilityDataRequest extends SpeakeasyBase {
    queryParams: GetWinProbabilityDataQueryParams;
}
export declare class GetWinProbabilityDataResponse extends SpeakeasyBase {
    contentType: string;
    playWps?: shared.PlayWp[];
    statusCode: number;
}
