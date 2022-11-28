import { SpeakeasyBase } from "../../../internal/utils";
import { ContactDetail } from "./contactdetail";
/**
 * The UpdateDomainContact request includes the following elements.
**/
export declare class UpdateDomainContactRequest extends SpeakeasyBase {
    adminContact?: ContactDetail;
    domainName: string;
    registrantContact?: ContactDetail;
    techContact?: ContactDetail;
}
