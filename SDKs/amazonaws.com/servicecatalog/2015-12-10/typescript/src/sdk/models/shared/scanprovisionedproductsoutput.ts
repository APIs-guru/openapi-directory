import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedProductDetail } from "./provisionedproductdetail";



export class ScanProvisionedProductsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProducts", elemType: ProvisionedProductDetail })
  provisionedProducts?: ProvisionedProductDetail[];
}
