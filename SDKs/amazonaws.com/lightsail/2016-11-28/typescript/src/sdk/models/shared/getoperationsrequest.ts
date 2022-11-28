import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOperationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
