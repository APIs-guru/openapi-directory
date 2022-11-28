import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopHyperParameterTuningJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobName" })
  hyperParameterTuningJobName: string;
}
