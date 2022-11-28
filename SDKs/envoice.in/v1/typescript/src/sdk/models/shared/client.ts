import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Client extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Address, form, name=Address;" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientCountryId, form, name=ClientCountryId;" })
  clientCountryId?: number;

  @SpeakeasyMetadata({ data: "json, name=ClientCurrencyId, form, name=ClientCurrencyId;" })
  clientCurrencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=CompanyRegistrationNumber, form, name=CompanyRegistrationNumber;" })
  companyRegistrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultDueDateInDays, form, name=DefaultDueDateInDays;" })
  defaultDueDateInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Email, form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Id, form, name=Id;" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=Name, form, name=Name;" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber, form, name=PhoneNumber;" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=UiLanguageId, form, name=UiLanguageId;" })
  uiLanguageId?: number;

  @SpeakeasyMetadata({ data: "json, name=UserId, form, name=UserId;" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=Vat, form, name=Vat;" })
  vat?: string;
}
