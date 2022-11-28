import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RankCarQueryParams extends SpeakeasyBase {
    apiKey?: string;
    appendApiKey?: boolean;
}
export declare class RankCarRequest extends SpeakeasyBase {
    queryParams: RankCarQueryParams;
    request: shared.CarRankRequest;
}
export declare class RankCarResponse extends SpeakeasyBase {
    carRankResponse?: shared.CarRankResponse;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
