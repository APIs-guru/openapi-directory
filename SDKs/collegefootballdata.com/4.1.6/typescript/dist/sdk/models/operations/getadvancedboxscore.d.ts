import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAdvancedBoxScoreQueryParams extends SpeakeasyBase {
    gameId: number;
}
export declare class GetAdvancedBoxScoreRequest extends SpeakeasyBase {
    queryParams: GetAdvancedBoxScoreQueryParams;
}
export declare class GetAdvancedBoxScoreResponse extends SpeakeasyBase {
    boxScore?: shared.BoxScore;
    contentType: string;
    statusCode: number;
}
