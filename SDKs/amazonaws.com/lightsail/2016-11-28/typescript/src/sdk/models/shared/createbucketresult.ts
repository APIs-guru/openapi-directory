import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Bucket } from "./bucket";
import { Operation } from "./operation";



export class CreateBucketResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: Bucket;

  @SpeakeasyMetadata({ data: "json, name=operations", elemType: Operation })
  operations?: Operation[];
}
