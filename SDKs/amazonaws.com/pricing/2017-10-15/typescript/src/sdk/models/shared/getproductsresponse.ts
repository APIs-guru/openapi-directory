import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FormatVersion" })
  formatVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PriceList" })
  priceList?: string[];
}
