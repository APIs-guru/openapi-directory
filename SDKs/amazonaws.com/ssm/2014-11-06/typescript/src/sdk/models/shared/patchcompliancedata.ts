import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchComplianceDataStateEnum } from "./patchcompliancedatastateenum";



// PatchComplianceData
/** 
 * Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance.
**/
export class PatchComplianceData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CVEIds" })
  cveIds?: string;

  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification: string;

  @SpeakeasyMetadata({ data: "json, name=InstalledTime" })
  installedTime: Date;

  @SpeakeasyMetadata({ data: "json, name=KBId" })
  kbId: string;

  @SpeakeasyMetadata({ data: "json, name=Severity" })
  severity: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state: PatchComplianceDataStateEnum;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title: string;
}
