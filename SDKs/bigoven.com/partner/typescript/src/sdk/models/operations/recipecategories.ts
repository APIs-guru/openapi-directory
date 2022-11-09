import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RecipeCategoriesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BigOvenModelRecipeCategory })
  bigOvenModelRecipeCategories?: shared.BigOvenModelRecipeCategory[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
