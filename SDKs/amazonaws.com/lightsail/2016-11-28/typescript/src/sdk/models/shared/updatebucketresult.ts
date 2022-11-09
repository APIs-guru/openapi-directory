import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Bucket } from "./bucket";
import { Operation } from "./operation";


export class UpdateBucketResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: Bucket;

  @Metadata({ data: "json, name=operations", elemType: shared.Operation })
  operations?: Operation[];
}
