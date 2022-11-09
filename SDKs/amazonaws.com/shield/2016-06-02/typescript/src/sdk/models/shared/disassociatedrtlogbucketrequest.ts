import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateDrtLogBucketRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogBucket" })
  logBucket: string;
}
