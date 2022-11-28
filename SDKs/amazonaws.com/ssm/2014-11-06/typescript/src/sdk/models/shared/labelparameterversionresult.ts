import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LabelParameterVersionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvalidLabels" })
  invalidLabels?: string[];

  @SpeakeasyMetadata({ data: "json, name=ParameterVersion" })
  parameterVersion?: number;
}
