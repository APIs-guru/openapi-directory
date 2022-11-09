import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EeOfferItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}
