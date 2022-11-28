import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDisksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
