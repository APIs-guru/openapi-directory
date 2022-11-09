import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelationalDatabaseLogStreamsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=logStreams" })
  logStreams?: string[];
}
