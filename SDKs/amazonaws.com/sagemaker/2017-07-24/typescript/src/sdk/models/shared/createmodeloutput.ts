import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateModelOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelArn" })
  modelArn: string;
}
