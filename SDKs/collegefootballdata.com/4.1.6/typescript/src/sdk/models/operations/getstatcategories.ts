import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getStatCategories200ApplicationJsonStrings?: string[];
}
