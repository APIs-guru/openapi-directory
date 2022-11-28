import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalClientEmailApiModel } from "./additionalclientemailapimodel";
export declare class ClientDetailsApiModel extends SpeakeasyBase {
    additionalEmails?: AdditionalClientEmailApiModel[];
    address?: string;
    clientCountryId?: number;
    clientCurrencyId?: number;
    companyRegistrationNumber?: string;
    createdOn?: Date;
    defaultDueDateInDays?: number;
    email?: string;
    id?: number;
    name?: string;
    phoneNumber?: string;
    uiLanguageId?: number;
    vat?: string;
}
