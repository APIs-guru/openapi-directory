import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerPostalAddress } from "./customerpostaladdress";



export class Customer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=alternateEmail" })
  alternateEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=customerCreationTime" })
  customerCreationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=customerDomain" })
  customerDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=postalAddress" })
  postalAddress?: CustomerPostalAddress;
}
