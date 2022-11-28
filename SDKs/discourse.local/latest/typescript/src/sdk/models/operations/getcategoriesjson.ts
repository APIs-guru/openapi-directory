import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCategoriesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCategoriesJson200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
