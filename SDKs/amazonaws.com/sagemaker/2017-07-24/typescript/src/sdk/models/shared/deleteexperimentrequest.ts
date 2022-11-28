import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteExperimentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExperimentName" })
  experimentName: string;
}
