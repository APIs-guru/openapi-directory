import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetV1NutritionQueryParams extends SpeakeasyBase {
    query: string;
}
export declare class GetV1NutritionRequest extends SpeakeasyBase {
    queryParams: GetV1NutritionQueryParams;
}
export declare class GetV1NutritionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
