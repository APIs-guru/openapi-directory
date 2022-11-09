import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOperationsForResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}
