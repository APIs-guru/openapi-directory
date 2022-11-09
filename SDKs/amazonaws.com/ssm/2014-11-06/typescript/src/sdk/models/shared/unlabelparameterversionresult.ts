import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UnlabelParameterVersionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InvalidLabels" })
  invalidLabels?: string[];

  @Metadata({ data: "json, name=RemovedLabels" })
  removedLabels?: string[];
}
