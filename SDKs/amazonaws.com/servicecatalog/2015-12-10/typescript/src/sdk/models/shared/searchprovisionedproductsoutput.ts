import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductAttribute } from "./provisionedproductattribute";



export class SearchProvisionedProductsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProducts", elemType: ProvisionedProductAttribute })
  provisionedProducts?: ProvisionedProductAttribute[];

  @SpeakeasyMetadata({ data: "json, name=TotalResultsCount" })
  totalResultsCount?: number;
}
