import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDisksRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
