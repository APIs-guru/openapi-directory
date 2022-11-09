import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateExperimentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExperimentArn" })
  experimentArn?: string;
}
