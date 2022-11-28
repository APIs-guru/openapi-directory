import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EstimationApiAllQueryParams extends SpeakeasyBase {
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
}
export declare class EstimationApiAllHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiAllRequest extends SpeakeasyBase {
    queryParams: EstimationApiAllQueryParams;
    headers: EstimationApiAllHeaders;
}
export declare class EstimationApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    listResultEstimationDetailsApiModel?: shared.ListResultEstimationDetailsApiModel;
    statusCode: number;
}
