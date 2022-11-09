import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PatchComplianceData } from "./patchcompliancedata";


export class DescribeInstancePatchesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Patches", elemType: shared.PatchComplianceData })
  patches?: PatchComplianceData[];
}
