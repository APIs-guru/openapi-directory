import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CategoryTypeDto } from "./categorytypedto";


export class PageResultCategoryTypeDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=Items", elemType: shared.CategoryTypeDto })
  items?: CategoryTypeDto[];

  @Metadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
