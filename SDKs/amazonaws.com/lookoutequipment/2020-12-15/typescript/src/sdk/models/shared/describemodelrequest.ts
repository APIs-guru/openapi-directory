import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;
}
