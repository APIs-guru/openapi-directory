import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EstimationApiDetailsQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class EstimationApiDetailsHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiDetailsRequest extends SpeakeasyBase {
    queryParams: EstimationApiDetailsQueryParams;
    headers: EstimationApiDetailsHeaders;
}
export declare class EstimationApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    estimationFullDetailsApiModel?: shared.EstimationFullDetailsApiModel;
    statusCode: number;
}
