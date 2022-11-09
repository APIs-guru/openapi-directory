import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisionedProductDetail } from "./provisionedproductdetail";


export class ScanProvisionedProductsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=ProvisionedProducts", elemType: shared.ProvisionedProductDetail })
  provisionedProducts?: ProvisionedProductDetail[];
}
