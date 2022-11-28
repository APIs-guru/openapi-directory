import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceShare } from "./resourceshare";



export class CreateResourceShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceShare" })
  resourceShare?: ResourceShare;
}
