import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAppImageConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppImageConfigArn" })
  appImageConfigArn?: string;
}
