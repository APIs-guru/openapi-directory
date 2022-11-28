import { SpeakeasyBase } from "../../../internal/utils";
import { PatchComplianceData } from "./patchcompliancedata";
export declare class DescribeInstancePatchesResult extends SpeakeasyBase {
    nextToken?: string;
    patches?: PatchComplianceData[];
}
