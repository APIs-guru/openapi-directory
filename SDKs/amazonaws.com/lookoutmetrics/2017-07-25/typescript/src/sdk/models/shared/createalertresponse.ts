import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAlertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlertArn" })
  alertArn?: string;
}
