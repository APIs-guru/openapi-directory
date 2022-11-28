import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestInfrastructurePropertiesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestInfrastructurePropertiesRequest extends SpeakeasyBase {
    headers: RequestInfrastructurePropertiesHeaders;
}
export declare class RequestInfrastructurePropertiesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    infrastructureProperties?: shared.InfrastructureProperties;
    statusCode: number;
}
