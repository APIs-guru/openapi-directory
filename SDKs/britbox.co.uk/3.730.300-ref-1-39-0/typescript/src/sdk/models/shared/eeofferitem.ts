import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EeOfferItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
