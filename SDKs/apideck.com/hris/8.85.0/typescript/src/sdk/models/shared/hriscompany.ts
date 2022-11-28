import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { Website } from "./website";


export enum HrisCompanyStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Trial = "trial",
    Other = "other"
}


export class HrisCompanyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=company_number" })
  companyNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=debtor_id" })
  debtorId?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=legal_name" })
  legalName: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: HrisCompanyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subdomain" })
  subdomain?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: Website })
  websites?: Website[];
}


export class HrisCompany extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addresses", elemType: Address })
  addresses?: Address[];

  @SpeakeasyMetadata({ data: "json, name=company_number" })
  companyNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=debtor_id" })
  debtorId?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emails", elemType: Email })
  emails?: Email[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=legal_name" })
  legalName: string;

  @SpeakeasyMetadata({ data: "json, name=phone_numbers", elemType: PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: HrisCompanyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subdomain" })
  subdomain?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=websites", elemType: Website })
  websites?: Website[];
}
