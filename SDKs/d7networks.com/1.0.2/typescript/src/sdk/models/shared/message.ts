import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to: string[];
}
