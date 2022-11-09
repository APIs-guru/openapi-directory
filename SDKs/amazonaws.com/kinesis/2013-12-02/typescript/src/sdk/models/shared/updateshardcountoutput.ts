import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateShardCountOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentShardCount" })
  currentShardCount?: number;

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;

  @Metadata({ data: "json, name=TargetShardCount" })
  targetShardCount?: number;
}
