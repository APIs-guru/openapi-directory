import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShippingLabelStatusEnum } from "./shippinglabelstatusenum";



export class DescribeReturnShippingLabelResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ShippingLabelStatusEnum;
}
