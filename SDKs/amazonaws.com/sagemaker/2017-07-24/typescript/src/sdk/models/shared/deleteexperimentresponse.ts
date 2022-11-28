import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteExperimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExperimentArn" })
  experimentArn?: string;
}
