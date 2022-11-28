import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateExperimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExperimentArn" })
  experimentArn?: string;
}
