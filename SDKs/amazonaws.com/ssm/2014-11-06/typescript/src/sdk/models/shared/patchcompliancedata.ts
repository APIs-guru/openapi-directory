import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PatchComplianceDataStateEnum } from "./patchcompliancedatastateenum";


// PatchComplianceData
/** 
 * Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance.
**/
export class PatchComplianceData extends SpeakeasyBase {
  @Metadata({ data: "json, name=CVEIds" })
  cveIds?: string;

  @Metadata({ data: "json, name=Classification" })
  classification: string;

  @Metadata({ data: "json, name=InstalledTime" })
  installedTime: Date;

  @Metadata({ data: "json, name=KBId" })
  kbId: string;

  @Metadata({ data: "json, name=Severity" })
  severity: string;

  @Metadata({ data: "json, name=State" })
  state: PatchComplianceDataStateEnum;

  @Metadata({ data: "json, name=Title" })
  title: string;
}
