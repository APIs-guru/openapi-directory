import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessKey } from "./accesskey";



export class GetBucketAccessKeysResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeys", elemType: AccessKey })
  accessKeys?: AccessKey[];
}
