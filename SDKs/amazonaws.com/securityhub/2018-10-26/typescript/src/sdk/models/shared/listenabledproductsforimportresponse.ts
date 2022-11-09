import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListEnabledProductsForImportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProductSubscriptions" })
  productSubscriptions?: string[];
}
