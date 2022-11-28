import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReturningProductionQueryParams extends SpeakeasyBase {
    conference?: string;
    team?: string;
    year?: number;
}
export declare class GetReturningProductionRequest extends SpeakeasyBase {
    queryParams: GetReturningProductionQueryParams;
}
export declare class GetReturningProductionResponse extends SpeakeasyBase {
    contentType: string;
    returningProductions?: shared.ReturningProduction[];
    statusCode: number;
}
