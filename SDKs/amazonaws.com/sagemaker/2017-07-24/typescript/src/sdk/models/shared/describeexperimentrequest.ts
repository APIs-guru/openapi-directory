import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeExperimentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExperimentName" })
  experimentName: string;
}
