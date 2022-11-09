import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeExperimentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExperimentName" })
  experimentName: string;
}
