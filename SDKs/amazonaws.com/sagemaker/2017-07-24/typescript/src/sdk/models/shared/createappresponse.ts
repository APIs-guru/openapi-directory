import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAppResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppArn" })
  appArn?: string;
}
