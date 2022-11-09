import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConstraintSummary } from "./constraintsummary";
import { ProvisioningArtifactOutput } from "./provisioningartifactoutput";
import { ProvisioningArtifactParameter } from "./provisioningartifactparameter";
import { ProvisioningArtifactPreferences } from "./provisioningartifactpreferences";
import { TagOptionSummary } from "./tagoptionsummary";
import { UsageInstruction } from "./usageinstruction";


export class DescribeProvisioningParametersOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConstraintSummaries", elemType: shared.ConstraintSummary })
  constraintSummaries?: ConstraintSummary[];

  @Metadata({ data: "json, name=ProvisioningArtifactOutputs", elemType: shared.ProvisioningArtifactOutput })
  provisioningArtifactOutputs?: ProvisioningArtifactOutput[];

  @Metadata({ data: "json, name=ProvisioningArtifactParameters", elemType: shared.ProvisioningArtifactParameter })
  provisioningArtifactParameters?: ProvisioningArtifactParameter[];

  @Metadata({ data: "json, name=ProvisioningArtifactPreferences" })
  provisioningArtifactPreferences?: ProvisioningArtifactPreferences;

  @Metadata({ data: "json, name=TagOptions", elemType: shared.TagOptionSummary })
  tagOptions?: TagOptionSummary[];

  @Metadata({ data: "json, name=UsageInstructions", elemType: shared.UsageInstruction })
  usageInstructions?: UsageInstruction[];
}
