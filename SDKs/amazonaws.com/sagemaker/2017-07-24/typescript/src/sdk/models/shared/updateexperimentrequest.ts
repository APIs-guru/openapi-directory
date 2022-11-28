import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateExperimentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=ExperimentName" })
  experimentName: string;
}
