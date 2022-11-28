import { SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";
export declare class CreateOrganizationRequest extends SpeakeasyBase {
    alias: string;
    clientToken?: string;
    directoryId?: string;
    domains?: Domain[];
    enableInteroperability?: boolean;
    kmsKeyArn?: string;
}
