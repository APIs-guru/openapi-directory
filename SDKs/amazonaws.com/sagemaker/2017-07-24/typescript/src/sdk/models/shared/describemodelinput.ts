import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeModelInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;
}
