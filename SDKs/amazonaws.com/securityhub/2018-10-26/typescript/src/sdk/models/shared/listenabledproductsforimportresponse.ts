import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListEnabledProductsForImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductSubscriptions" })
  productSubscriptions?: string[];
}
