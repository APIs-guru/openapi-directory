import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDomainsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
