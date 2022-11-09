import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisionedProductAttribute } from "./provisionedproductattribute";


export class SearchProvisionedProductsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=ProvisionedProducts", elemType: shared.ProvisionedProductAttribute })
  provisionedProducts?: ProvisionedProductAttribute[];

  @Metadata({ data: "json, name=TotalResultsCount" })
  totalResultsCount?: number;
}
