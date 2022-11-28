import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EstimationApiUriQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class EstimationApiUriHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class EstimationApiUriRequest extends SpeakeasyBase {
    queryParams: EstimationApiUriQueryParams;
    headers: EstimationApiUriHeaders;
}
export declare class EstimationApiUriResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    estimationUriApiModel?: shared.EstimationUriApiModel;
    statusCode: number;
}
