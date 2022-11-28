import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalClientEmailApiModel } from "./additionalclientemailapimodel";
export declare class ClientUpdateApiModel extends SpeakeasyBase {
    additionalEmails?: AdditionalClientEmailApiModel[];
    address?: string;
    clientCountryId?: number;
    clientCurrencyId?: number;
    companyRegistrationNumber?: string;
    defaultDueDateInDays?: number;
    email?: string;
    id?: number;
    name?: string;
    phoneNumber?: string;
    uiLanguageId?: number;
    vat?: string;
}
