import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAppResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppArn" })
  appArn?: string;
}
