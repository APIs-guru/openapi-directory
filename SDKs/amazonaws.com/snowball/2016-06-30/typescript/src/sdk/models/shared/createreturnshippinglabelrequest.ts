import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShippingOptionEnum } from "./shippingoptionenum";



export class CreateReturnShippingLabelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;

  @SpeakeasyMetadata({ data: "json, name=ShippingOption" })
  shippingOption?: ShippingOptionEnum;
}
