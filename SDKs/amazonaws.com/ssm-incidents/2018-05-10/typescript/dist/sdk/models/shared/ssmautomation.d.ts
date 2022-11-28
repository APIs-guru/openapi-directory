import { SpeakeasyBase } from "../../../internal/utils";
import { SsmTargetAccountEnum } from "./ssmtargetaccountenum";
/**
 * Details about the Systems Manager automation document that will be used as a runbook during an incident.
**/
export declare class SsmAutomation extends SpeakeasyBase {
    documentName: string;
    documentVersion?: string;
    parameters?: Map<string, string[]>;
    roleArn: string;
    targetAccount?: SsmTargetAccountEnum;
}
