import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchDeleteWorldsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=unprocessedWorlds" })
  unprocessedWorlds?: string[];
}
