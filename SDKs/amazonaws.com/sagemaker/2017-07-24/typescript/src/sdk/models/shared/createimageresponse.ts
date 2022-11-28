import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageArn" })
  imageArn?: string;
}
