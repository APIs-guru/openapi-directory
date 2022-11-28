import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConstraintSummary } from "./constraintsummary";
import { ProvisioningArtifactOutput } from "./provisioningartifactoutput";
import { ProvisioningArtifactParameter } from "./provisioningartifactparameter";
import { ProvisioningArtifactPreferences } from "./provisioningartifactpreferences";
import { TagOptionSummary } from "./tagoptionsummary";
import { UsageInstruction } from "./usageinstruction";



export class DescribeProvisioningParametersOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConstraintSummaries", elemType: ConstraintSummary })
  constraintSummaries?: ConstraintSummary[];

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactOutputs", elemType: ProvisioningArtifactOutput })
  provisioningArtifactOutputs?: ProvisioningArtifactOutput[];

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactParameters", elemType: ProvisioningArtifactParameter })
  provisioningArtifactParameters?: ProvisioningArtifactParameter[];

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactPreferences" })
  provisioningArtifactPreferences?: ProvisioningArtifactPreferences;

  @SpeakeasyMetadata({ data: "json, name=TagOptions", elemType: TagOptionSummary })
  tagOptions?: TagOptionSummary[];

  @SpeakeasyMetadata({ data: "json, name=UsageInstructions", elemType: UsageInstruction })
  usageInstructions?: UsageInstruction[];
}
