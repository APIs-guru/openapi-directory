import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageArn" })
  imageArn?: string;
}
