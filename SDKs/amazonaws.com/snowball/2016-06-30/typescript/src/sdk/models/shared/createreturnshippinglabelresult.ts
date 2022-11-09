import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShippingLabelStatusEnum } from "./shippinglabelstatusenum";


export class CreateReturnShippingLabelResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Status" })
  status?: ShippingLabelStatusEnum;
}
