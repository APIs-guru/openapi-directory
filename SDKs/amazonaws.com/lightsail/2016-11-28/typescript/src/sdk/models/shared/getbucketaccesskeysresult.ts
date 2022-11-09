import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessKey } from "./accesskey";


export class GetBucketAccessKeysResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKeys", elemType: shared.AccessKey })
  accessKeys?: AccessKey[];
}
