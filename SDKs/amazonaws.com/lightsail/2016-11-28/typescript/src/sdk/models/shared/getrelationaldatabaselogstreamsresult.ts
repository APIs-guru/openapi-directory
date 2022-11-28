import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelationalDatabaseLogStreamsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logStreams" })
  logStreams?: string[];
}
