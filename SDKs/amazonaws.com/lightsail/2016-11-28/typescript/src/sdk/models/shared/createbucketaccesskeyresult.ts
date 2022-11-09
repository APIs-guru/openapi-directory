import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessKey } from "./accesskey";
import { Operation } from "./operation";


export class CreateBucketAccessKeyResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKey" })
  accessKey?: AccessKey;

  @Metadata({ data: "json, name=operations", elemType: shared.Operation })
  operations?: Operation[];
}
