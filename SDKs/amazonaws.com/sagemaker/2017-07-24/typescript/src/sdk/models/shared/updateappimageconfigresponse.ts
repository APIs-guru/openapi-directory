import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateAppImageConfigResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppImageConfigArn" })
  appImageConfigArn?: string;
}
