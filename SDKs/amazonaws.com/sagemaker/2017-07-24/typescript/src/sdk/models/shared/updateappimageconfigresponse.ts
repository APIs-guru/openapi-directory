import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAppImageConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppImageConfigArn" })
  appImageConfigArn?: string;
}
