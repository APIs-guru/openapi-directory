import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdditionalClientEmailApiModel } from "./additionalclientemailapimodel";



export class ClientCreateApiModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdditionalEmails", elemType: AdditionalClientEmailApiModel })
  additionalEmails?: AdditionalClientEmailApiModel[];

  @SpeakeasyMetadata({ data: "json, name=Address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientCountryId" })
  clientCountryId?: number;

  @SpeakeasyMetadata({ data: "json, name=ClientCurrencyId" })
  clientCurrencyId?: number;

  @SpeakeasyMetadata({ data: "json, name=CompanyRegistrationNumber" })
  companyRegistrationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultDueDateInDays" })
  defaultDueDateInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=Email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PhoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=UiLanguageId" })
  uiLanguageId?: number;

  @SpeakeasyMetadata({ data: "json, name=Vat" })
  vat?: string;
}
