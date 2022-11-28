import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawMessageContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messageContent" })
  messageContent: string;
}
