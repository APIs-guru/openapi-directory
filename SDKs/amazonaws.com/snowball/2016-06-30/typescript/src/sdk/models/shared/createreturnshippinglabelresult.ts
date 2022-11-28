import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShippingLabelStatusEnum } from "./shippinglabelstatusenum";



export class CreateReturnShippingLabelResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ShippingLabelStatusEnum;
}
