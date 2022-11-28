import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLogStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupName" })
  logGroupName: string;

  @SpeakeasyMetadata({ data: "json, name=logStreamName" })
  logStreamName: string;
}
