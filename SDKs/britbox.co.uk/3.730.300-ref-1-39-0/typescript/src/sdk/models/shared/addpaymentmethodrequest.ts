import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AddPaymentMethodRequestTypeEnum {
    Card = "Card"
}


export class AddPaymentMethodRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=makeDefault" })
  makeDefault?: boolean;

  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=type" })
  type: AddPaymentMethodRequestTypeEnum;
}
