import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueryResultsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryId" })
  queryId: string;
}
