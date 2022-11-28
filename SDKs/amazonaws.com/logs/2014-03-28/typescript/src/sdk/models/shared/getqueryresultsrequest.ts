import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueryResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryId" })
  queryId: string;
}
