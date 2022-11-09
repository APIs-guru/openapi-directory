import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStaticIpsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
