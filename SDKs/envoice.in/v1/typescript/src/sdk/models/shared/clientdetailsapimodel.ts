import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdditionalClientEmailApiModel } from "./additionalclientemailapimodel";


export class ClientDetailsApiModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdditionalEmails", elemType: shared.AdditionalClientEmailApiModel })
  additionalEmails?: AdditionalClientEmailApiModel[];

  @Metadata({ data: "json, name=Address" })
  address?: string;

  @Metadata({ data: "json, name=ClientCountryId" })
  clientCountryId?: number;

  @Metadata({ data: "json, name=ClientCurrencyId" })
  clientCurrencyId?: number;

  @Metadata({ data: "json, name=CompanyRegistrationNumber" })
  companyRegistrationNumber?: string;

  @Metadata({ data: "json, name=CreatedOn" })
  createdOn?: Date;

  @Metadata({ data: "json, name=DefaultDueDateInDays" })
  defaultDueDateInDays?: number;

  @Metadata({ data: "json, name=Email" })
  email?: string;

  @Metadata({ data: "json, name=Id" })
  id?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=UiLanguageId" })
  uiLanguageId?: number;

  @Metadata({ data: "json, name=Vat" })
  vat?: string;
}
