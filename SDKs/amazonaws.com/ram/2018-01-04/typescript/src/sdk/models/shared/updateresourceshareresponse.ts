import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceShare } from "./resourceshare";


export class UpdateResourceShareResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=resourceShare" })
  resourceShare?: ResourceShare;
}
