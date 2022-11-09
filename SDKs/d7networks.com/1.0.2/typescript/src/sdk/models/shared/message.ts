import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=from" })
  from: string;

  @Metadata({ data: "json, name=to" })
  to: string[];
}
