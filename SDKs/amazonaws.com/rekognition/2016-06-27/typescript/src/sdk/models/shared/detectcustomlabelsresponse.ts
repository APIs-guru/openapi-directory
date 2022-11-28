import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomLabel } from "./customlabel";



export class DetectCustomLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CustomLabels", elemType: CustomLabel })
  customLabels?: CustomLabel[];
}
