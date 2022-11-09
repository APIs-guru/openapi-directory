import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateExperimentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExperimentArn" })
  experimentArn?: string;
}
