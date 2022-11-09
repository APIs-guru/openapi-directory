import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageArn" })
  imageArn?: string;
}
