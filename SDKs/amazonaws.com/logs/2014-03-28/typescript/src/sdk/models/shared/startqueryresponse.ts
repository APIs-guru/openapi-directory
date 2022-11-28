import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryId" })
  queryId?: string;
}
