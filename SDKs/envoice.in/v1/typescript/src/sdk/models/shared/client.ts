import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Client extends SpeakeasyBase {
  @Metadata({ data: "json, name=Address, form, name=Address;" })
  address?: string;

  @Metadata({ data: "json, name=ClientCountryId, form, name=ClientCountryId;" })
  clientCountryId?: number;

  @Metadata({ data: "json, name=ClientCurrencyId, form, name=ClientCurrencyId;" })
  clientCurrencyId?: number;

  @Metadata({ data: "json, name=CompanyRegistrationNumber, form, name=CompanyRegistrationNumber;" })
  companyRegistrationNumber?: string;

  @Metadata({ data: "json, name=DefaultDueDateInDays, form, name=DefaultDueDateInDays;" })
  defaultDueDateInDays?: number;

  @Metadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @Metadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @Metadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @Metadata({ data: "json, name=PhoneNumber, form, name=PhoneNumber;" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=UiLanguageId, form, name=UiLanguageId;" })
  uiLanguageId?: number;

  @Metadata({ data: "json, name=UserId, form, name=UserId;" })
  userId?: number;

  @Metadata({ data: "json, name=Vat, form, name=Vat;" })
  vat?: string;
}
