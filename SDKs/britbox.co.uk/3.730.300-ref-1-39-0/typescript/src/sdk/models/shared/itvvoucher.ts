import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ItvVoucherOfferTypeEnum {
    Stripe = "stripe",
    TalonOne = "talon one"
}


export class ItvVoucher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=display" })
  display: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=offerType" })
  offerType: ItvVoucherOfferTypeEnum;
}
