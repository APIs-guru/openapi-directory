import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Download extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agreement_name" })
  agreementName?: string;

  @SpeakeasyMetadata({ data: "json, name=product_id" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
