import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchDeleteWorldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unprocessedWorlds" })
  unprocessedWorlds?: string[];
}
