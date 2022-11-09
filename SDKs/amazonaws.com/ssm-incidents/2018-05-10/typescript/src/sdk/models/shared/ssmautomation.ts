import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SsmTargetAccountEnum } from "./ssmtargetaccountenum";


// SsmAutomation
/** 
 * Details about the Systems Manager automation document that will be used as a runbook during an incident.
**/
export class SsmAutomation extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentName" })
  documentName: string;

  @Metadata({ data: "json, name=documentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=targetAccount" })
  targetAccount?: SsmTargetAccountEnum;
}
