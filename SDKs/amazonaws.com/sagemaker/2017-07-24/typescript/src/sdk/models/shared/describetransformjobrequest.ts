import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTransformJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TransformJobName" })
  transformJobName: string;
}
