import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAppImageConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppImageConfigArn" })
  appImageConfigArn?: string;
}
