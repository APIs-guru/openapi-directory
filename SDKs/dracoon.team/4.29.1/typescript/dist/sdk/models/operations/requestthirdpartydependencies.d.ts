import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestThirdPartyDependenciesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    thirdPartyDependenciesData?: shared.ThirdPartyDependenciesData[];
}
