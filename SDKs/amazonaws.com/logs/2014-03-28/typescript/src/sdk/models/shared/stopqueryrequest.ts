import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryId" })
  queryId: string;
}
