import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LabelParameterVersionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InvalidLabels" })
  invalidLabels?: string[];

  @Metadata({ data: "json, name=ParameterVersion" })
  parameterVersion?: number;
}
