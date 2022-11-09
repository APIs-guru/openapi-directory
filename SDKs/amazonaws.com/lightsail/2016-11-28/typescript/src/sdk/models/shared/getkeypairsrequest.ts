import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetKeyPairsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
