import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Download extends SpeakeasyBase {
  @Metadata({ data: "json, name=agreement_name" })
  agreementName?: string;

  @Metadata({ data: "json, name=product_id" })
  productId?: string;

  @Metadata({ data: "json, name=product_type" })
  productType?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
