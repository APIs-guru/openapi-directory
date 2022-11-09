import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerPostalAddress } from "./customerpostaladdress";


export class Customer extends SpeakeasyBase {
  @Metadata({ data: "json, name=alternateEmail" })
  alternateEmail?: string;

  @Metadata({ data: "json, name=customerCreationTime" })
  customerCreationTime?: Date;

  @Metadata({ data: "json, name=customerDomain" })
  customerDomain?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=postalAddress" })
  postalAddress?: CustomerPostalAddress;
}
