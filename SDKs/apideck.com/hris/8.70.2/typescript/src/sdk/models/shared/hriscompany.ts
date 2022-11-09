import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { Email } from "./email";
import { PhoneNumber } from "./phonenumber";
import { Website } from "./website";

export enum HrisCompanyStatusEnum {
    Active = "active"
,    Inactive = "inactive"
,    Trial = "trial"
,    Other = "other"
}


export class HrisCompany extends SpeakeasyBase {
  @Metadata({ data: "json, name=addresses", elemType: shared.Address })
  addresses?: Address[];

  @Metadata({ data: "json, name=company_number" })
  companyNumber?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: string;

  @Metadata({ data: "json, name=debtor_id" })
  debtorId?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=emails", elemType: shared.Email })
  emails?: Email[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=legal_name" })
  legalName: string;

  @Metadata({ data: "json, name=phone_numbers", elemType: shared.PhoneNumber })
  phoneNumbers?: PhoneNumber[];

  @Metadata({ data: "json, name=status" })
  status?: HrisCompanyStatusEnum;

  @Metadata({ data: "json, name=subdomain" })
  subdomain?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=updated_by" })
  updatedBy?: string;

  @Metadata({ data: "json, name=websites", elemType: shared.Website })
  websites?: Website[];
}
