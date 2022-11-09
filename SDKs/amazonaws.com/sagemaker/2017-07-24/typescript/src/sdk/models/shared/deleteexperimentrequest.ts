import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteExperimentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExperimentName" })
  experimentName: string;
}
