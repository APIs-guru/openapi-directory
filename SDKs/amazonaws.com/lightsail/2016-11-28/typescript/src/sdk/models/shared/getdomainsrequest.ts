import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDomainsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
