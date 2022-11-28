import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3BucketDefinitionForJob
/** 
 * Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account.
**/
export class S3BucketDefinitionForJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=buckets" })
  buckets: string[];
}
