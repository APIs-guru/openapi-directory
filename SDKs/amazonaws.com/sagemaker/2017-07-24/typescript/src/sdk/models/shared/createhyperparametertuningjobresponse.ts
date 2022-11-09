import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateHyperParameterTuningJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HyperParameterTuningJobArn" })
  hyperParameterTuningJobArn: string;
}
