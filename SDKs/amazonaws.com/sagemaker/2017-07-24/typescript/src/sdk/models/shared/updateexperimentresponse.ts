import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateExperimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExperimentArn" })
  experimentArn?: string;
}
