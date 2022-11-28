import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GsiPredictionQueryParams extends SpeakeasyBase {
    key?: string;
    zip?: string;
}
/**
 * Standarized location info sourced for prediction
**/
export declare class GsiPrediction200ApplicationJsonLocation extends SpeakeasyBase {
    city?: string;
    zip?: string;
}
/**
 * Indicates number of hours a device should run
**/
export declare class GsiPrediction200ApplicationJsonMatrixH0 extends SpeakeasyBase {
    avg1?: string;
    avg2?: string;
    avg3?: string;
}
/**
 * Device switching recommendation.
**/
export declare class GsiPrediction200ApplicationJsonMatrix extends SpeakeasyBase {
    h0?: GsiPrediction200ApplicationJsonMatrixH0;
}
export declare class GsiPrediction200ApplicationJson extends SpeakeasyBase {
    forecast?: shared.ForecastItem[];
    location?: GsiPrediction200ApplicationJsonLocation;
    matrix?: GsiPrediction200ApplicationJsonMatrix;
}
export declare class GsiPredictionRequest extends SpeakeasyBase {
    queryParams: GsiPredictionQueryParams;
}
export declare class GsiPredictionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gsiPrediction200ApplicationJsonObject?: GsiPrediction200ApplicationJson;
}
