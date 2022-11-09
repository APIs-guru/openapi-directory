import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateModelOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelArn" })
  modelArn: string;
}
