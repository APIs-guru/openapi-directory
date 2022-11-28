import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateHyperParameterTuningJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HyperParameterTuningJobArn" })
  hyperParameterTuningJobArn: string;
}
