import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOperationsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
