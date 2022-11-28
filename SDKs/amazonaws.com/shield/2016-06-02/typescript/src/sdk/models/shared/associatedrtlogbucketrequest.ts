import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateDrtLogBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogBucket" })
  logBucket: string;
}
