import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeHyperParameterTuningJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;
}
