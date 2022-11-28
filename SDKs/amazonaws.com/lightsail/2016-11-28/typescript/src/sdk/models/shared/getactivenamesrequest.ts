import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActiveNamesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
