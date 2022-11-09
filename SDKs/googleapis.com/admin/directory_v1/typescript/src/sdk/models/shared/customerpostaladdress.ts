import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomerPostalAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=addressLine3" })
  addressLine3?: string;

  @Metadata({ data: "json, name=contactName" })
  contactName?: string;

  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=organizationName" })
  organizationName?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;
}
