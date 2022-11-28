import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PatchComplianceData } from "./patchcompliancedata";



export class DescribeInstancePatchesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Patches", elemType: PatchComplianceData })
  patches?: PatchComplianceData[];
}
