import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrationStatusEnum } from "./registrationstatusenum";
export declare class ListWorkflowTypesInput extends SpeakeasyBase {
    domain: string;
    maximumPageSize?: number;
    name?: string;
    nextPageToken?: string;
    registrationStatus: RegistrationStatusEnum;
    reverseOrder?: boolean;
}
