import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAlertResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlertArn" })
  alertArn?: string;
}
