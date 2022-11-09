import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ItvVoucherOfferTypeEnum {
    Stripe = "stripe"
,    TalonOne = "talon one"
}


export class ItvVoucher extends SpeakeasyBase {
  @Metadata({ data: "json, name=display" })
  display: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links: Map<string, any>;

  @Metadata({ data: "json, name=offerType" })
  offerType: ItvVoucherOfferTypeEnum;
}
