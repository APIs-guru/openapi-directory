import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSsoStrategiesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetSsoStrategiesIdRequest extends SpeakeasyBase {
    pathParams: GetSsoStrategiesIdPathParams;
}
export declare class GetSsoStrategiesIdResponse extends SpeakeasyBase {
    contentType: string;
    ssoStrategyEntity?: shared.SsoStrategyEntity;
    statusCode: number;
}
