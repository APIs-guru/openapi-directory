import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getCategories200ApplicationJsonStrings?: string[];
}
