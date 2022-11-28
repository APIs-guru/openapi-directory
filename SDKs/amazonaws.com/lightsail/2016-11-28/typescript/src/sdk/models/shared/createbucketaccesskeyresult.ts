import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessKey } from "./accesskey";
import { Operation } from "./operation";



export class CreateBucketAccessKeyResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKey" })
  accessKey?: AccessKey;

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: Operation })
  operations?: Operation[];
}
