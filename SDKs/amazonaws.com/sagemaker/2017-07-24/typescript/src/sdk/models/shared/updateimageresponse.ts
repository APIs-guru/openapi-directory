import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageArn" })
  imageArn?: string;
}
