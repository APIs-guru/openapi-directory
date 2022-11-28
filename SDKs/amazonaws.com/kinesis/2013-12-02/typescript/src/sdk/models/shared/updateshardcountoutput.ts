import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateShardCountOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentShardCount" })
  currentShardCount?: number;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetShardCount" })
  targetShardCount?: number;
}
