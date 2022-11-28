import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetV1NutritionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetV1NutritionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV1NutritionQueryParams;
}


export class GetV1NutritionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
