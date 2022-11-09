import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCategoriesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCategoriesJson200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
