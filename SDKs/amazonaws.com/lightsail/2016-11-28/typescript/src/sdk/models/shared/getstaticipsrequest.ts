import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStaticIpsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
