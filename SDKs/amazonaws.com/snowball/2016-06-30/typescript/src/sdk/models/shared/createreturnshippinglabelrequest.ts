import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShippingOptionEnum } from "./shippingoptionenum";


export class CreateReturnShippingLabelRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;

  @Metadata({ data: "json, name=ShippingOption" })
  shippingOption?: ShippingOptionEnum;
}
