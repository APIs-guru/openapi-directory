import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomLabel } from "./customlabel";


export class DetectCustomLabelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CustomLabels", elemType: shared.CustomLabel })
  customLabels?: CustomLabel[];
}
