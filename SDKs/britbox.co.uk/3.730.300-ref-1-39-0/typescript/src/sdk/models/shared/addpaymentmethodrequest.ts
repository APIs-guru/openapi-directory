import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AddPaymentMethodRequestTypeEnum {
    Card = "Card"
}


export class AddPaymentMethodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=makeDefault" })
  makeDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: AddPaymentMethodRequestTypeEnum;
}
