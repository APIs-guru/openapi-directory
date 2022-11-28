import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The UpdateDomainContactPrivacy request includes the following elements.
**/
export declare class UpdateDomainContactPrivacyRequest extends SpeakeasyBase {
    adminPrivacy?: boolean;
    domainName: string;
    registrantPrivacy?: boolean;
    techPrivacy?: boolean;
}
