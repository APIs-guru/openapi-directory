import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetV1NutritionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class GetV1NutritionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV1NutritionQueryParams;
}


export class GetV1NutritionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
