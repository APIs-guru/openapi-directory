import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateLogStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=logStreamName" })
  logStreamName: string;
}
