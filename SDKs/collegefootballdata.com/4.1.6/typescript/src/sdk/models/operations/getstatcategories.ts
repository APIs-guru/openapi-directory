import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStatCategories200ApplicationJsonStrings?: string[];
}
