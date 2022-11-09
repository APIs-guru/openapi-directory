import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopTransformJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TransformJobName" })
  transformJobName: string;
}
