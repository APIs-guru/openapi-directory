import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSubCategoriesPathParams extends SpeakeasyBase {
    category: string;
}
export declare class GetSubCategoriesQueryParams extends SpeakeasyBase {
    lang: shared.LangEnum;
}
export declare class GetSubCategoriesRequest extends SpeakeasyBase {
    pathParams: GetSubCategoriesPathParams;
    queryParams: GetSubCategoriesQueryParams;
}
export declare class GetSubCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
