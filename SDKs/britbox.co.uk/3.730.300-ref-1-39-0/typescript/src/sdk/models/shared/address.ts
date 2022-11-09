import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Address extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}
