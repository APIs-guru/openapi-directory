import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryTypeDto } from "./categorytypedto";



export class PageResultCategoryTypeDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=Items", elemType: CategoryTypeDto })
  items?: CategoryTypeDto[];

  @SpeakeasyMetadata({ data: "json, name=NextPageLink" })
  nextPageLink?: string;
}
