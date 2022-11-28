import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";
/**
 * Contains general information about a domain.
**/
export declare class DomainInfo extends SpeakeasyBase {
    arn?: string;
    description?: string;
    name: string;
    status: RegistrationStatusEnum;
}
