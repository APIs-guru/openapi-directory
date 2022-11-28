import { SpeakeasyBase } from "../../../internal/utils";
import { ConstraintSummary } from "./constraintsummary";
import { ProvisioningArtifactOutput } from "./provisioningartifactoutput";
import { ProvisioningArtifactParameter } from "./provisioningartifactparameter";
import { ProvisioningArtifactPreferences } from "./provisioningartifactpreferences";
import { TagOptionSummary } from "./tagoptionsummary";
import { UsageInstruction } from "./usageinstruction";
export declare class DescribeProvisioningParametersOutput extends SpeakeasyBase {
    constraintSummaries?: ConstraintSummary[];
    provisioningArtifactOutputs?: ProvisioningArtifactOutput[];
    provisioningArtifactParameters?: ProvisioningArtifactParameter[];
    provisioningArtifactPreferences?: ProvisioningArtifactPreferences;
    tagOptions?: TagOptionSummary[];
    usageInstructions?: UsageInstruction[];
}
