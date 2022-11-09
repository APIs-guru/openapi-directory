import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTransformJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TransformJobArn" })
  transformJobArn: string;
}
