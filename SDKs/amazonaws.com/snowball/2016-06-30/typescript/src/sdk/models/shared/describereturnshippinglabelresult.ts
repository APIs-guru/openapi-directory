import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ShippingLabelStatusEnum } from "./shippinglabelstatusenum";


export class DescribeReturnShippingLabelResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: ShippingLabelStatusEnum;
}
