import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeModelInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelName" })
  modelName: string;
}
