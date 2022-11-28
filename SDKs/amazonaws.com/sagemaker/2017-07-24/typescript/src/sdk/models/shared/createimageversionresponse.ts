import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateImageVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageVersionArn" })
  imageVersionArn?: string;
}
