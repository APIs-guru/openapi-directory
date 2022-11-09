import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryId" })
  queryId?: string;
}
