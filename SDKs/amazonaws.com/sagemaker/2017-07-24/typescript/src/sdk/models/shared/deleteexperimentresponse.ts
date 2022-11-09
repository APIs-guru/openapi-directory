import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteExperimentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExperimentArn" })
  experimentArn?: string;
}
