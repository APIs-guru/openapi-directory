import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrantInput } from "./registrantinput";
export declare class RegisterDomain extends SpeakeasyBase {
    domainName?: string;
    nameServers?: string[];
    registrant?: RegistrantInput;
}
