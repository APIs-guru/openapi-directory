import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLanguageModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelName" })
  modelName: string;
}
