import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSsoStrategiesQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
}
export declare class GetSsoStrategiesRequest extends SpeakeasyBase {
    queryParams: GetSsoStrategiesQueryParams;
}
export declare class GetSsoStrategiesResponse extends SpeakeasyBase {
    contentType: string;
    ssoStrategyEntities?: shared.SsoStrategyEntity[];
    statusCode: number;
}
