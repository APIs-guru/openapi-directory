import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetModelNamesGetModelsGetQueryParams extends SpeakeasyBase {
    brandName: string;
    jwt: string;
}
export declare class GetModelNamesGetModelsGetRequest extends SpeakeasyBase {
    queryParams: GetModelNamesGetModelsGetQueryParams;
}
export declare class GetModelNamesGetModelsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    modelResp?: shared.ModelResp;
    statusCode: number;
}
