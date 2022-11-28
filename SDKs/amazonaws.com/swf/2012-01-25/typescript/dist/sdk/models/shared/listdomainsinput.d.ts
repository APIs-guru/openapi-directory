import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";
export declare class ListDomainsInput extends SpeakeasyBase {
    maximumPageSize?: number;
    nextPageToken?: string;
    registrationStatus: RegistrationStatusEnum;
    reverseOrder?: boolean;
}
