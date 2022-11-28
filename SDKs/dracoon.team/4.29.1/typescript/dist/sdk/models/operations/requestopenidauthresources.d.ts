import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestOpenIdAuthResourcesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    openIdAuthResources?: shared.OpenIdAuthResources;
    statusCode: number;
}
