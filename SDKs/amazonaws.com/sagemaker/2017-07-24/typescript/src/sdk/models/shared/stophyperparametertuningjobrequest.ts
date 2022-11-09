import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopHyperParameterTuningJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;
}
