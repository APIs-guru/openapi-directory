import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetOperationsForResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}
