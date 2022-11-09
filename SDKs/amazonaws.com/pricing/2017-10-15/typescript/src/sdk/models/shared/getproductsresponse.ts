import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProductsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FormatVersion" })
  formatVersion?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PriceList" })
  priceList?: string[];
}
