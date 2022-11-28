import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SsmTargetAccountEnum } from "./ssmtargetaccountenum";



// SsmAutomation
/** 
 * Details about the Systems Manager automation document that will be used as a runbook during an incident.
**/
export class SsmAutomation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentName" })
  documentName: string;

  @SpeakeasyMetadata({ data: "json, name=documentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=targetAccount" })
  targetAccount?: SsmTargetAccountEnum;
}
