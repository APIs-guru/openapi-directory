import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateDrtLogBucketRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogBucket" })
  logBucket: string;
}
