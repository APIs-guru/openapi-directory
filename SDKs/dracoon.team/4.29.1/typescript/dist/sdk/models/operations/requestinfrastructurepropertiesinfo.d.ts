import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestInfrastructurePropertiesInfoHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestInfrastructurePropertiesInfoRequest extends SpeakeasyBase {
    headers: RequestInfrastructurePropertiesInfoHeaders;
}
export declare class RequestInfrastructurePropertiesInfoResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    infrastructureProperties?: shared.InfrastructureProperties;
    statusCode: number;
}
