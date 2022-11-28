import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryId" })
  queryId: string;
}
