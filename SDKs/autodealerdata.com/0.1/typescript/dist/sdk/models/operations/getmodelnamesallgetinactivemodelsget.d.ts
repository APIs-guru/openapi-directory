import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetModelNamesAllGetInactiveModelsGetQueryParams extends SpeakeasyBase {
    brandName: string;
    jwt: string;
}
export declare class GetModelNamesAllGetInactiveModelsGetRequest extends SpeakeasyBase {
    queryParams: GetModelNamesAllGetInactiveModelsGetQueryParams;
}
export declare class GetModelNamesAllGetInactiveModelsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    modelResp?: shared.ModelResp;
    statusCode: number;
}
