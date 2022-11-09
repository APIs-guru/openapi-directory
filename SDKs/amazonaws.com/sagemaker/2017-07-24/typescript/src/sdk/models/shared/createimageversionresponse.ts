import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateImageVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageVersionArn" })
  imageVersionArn?: string;
}
