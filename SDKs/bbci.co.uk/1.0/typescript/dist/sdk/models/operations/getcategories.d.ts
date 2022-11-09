import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCategoriesQueryParams extends SpeakeasyBase {
    lang: shared.LangEnum;
}
export declare class GetCategoriesRequest extends SpeakeasyBase {
    queryParams: GetCategoriesQueryParams;
}
export declare class GetCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
