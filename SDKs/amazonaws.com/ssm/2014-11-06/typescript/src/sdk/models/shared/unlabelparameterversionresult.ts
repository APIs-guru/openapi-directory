import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UnlabelParameterVersionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvalidLabels" })
  invalidLabels?: string[];

  @SpeakeasyMetadata({ data: "json, name=RemovedLabels" })
  removedLabels?: string[];
}
