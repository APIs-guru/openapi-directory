import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateExperimentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=ExperimentName" })
  experimentName: string;
}
