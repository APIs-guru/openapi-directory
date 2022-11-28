import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeHyperParameterTuningJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;
}
