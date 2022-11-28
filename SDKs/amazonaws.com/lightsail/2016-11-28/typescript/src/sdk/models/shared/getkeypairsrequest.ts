import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetKeyPairsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
