import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateDrtLogBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogBucket" })
  logBucket: string;
}
