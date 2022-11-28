import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostChargeStations201ApplicationJson extends SpeakeasyBase {
    chargestation?: Map<string, any>;
    message?: string;
    ok?: boolean;
}
export declare class PostChargeStationsRequest extends SpeakeasyBase {
    request: shared.Schema1;
}
export declare class PostChargeStationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postChargeStations201ApplicationJsonObject?: PostChargeStations201ApplicationJson;
}
