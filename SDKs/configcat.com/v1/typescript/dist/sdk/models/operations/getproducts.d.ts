import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsResponse extends SpeakeasyBase {
    contentType: string;
    productModelHaljsons?: shared.ProductModelHaljson[];
    productModels?: shared.ProductModel[];
    statusCode: number;
}
