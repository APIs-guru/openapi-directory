import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.
**/
export declare class AccountTreeRequest extends SpeakeasyBase {
    accountName?: string;
    kind?: string;
    profileName?: string;
    timezone?: string;
    webpropertyName?: string;
    websiteUrl?: string;
}
