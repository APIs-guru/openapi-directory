import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3BucketDefinitionForJob
/** 
 * Specifies an Amazon Web Services account that owns S3 buckets for a classification job to analyze, and one or more specific buckets to analyze for that account.
**/
export class S3BucketDefinitionForJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId: string;

  @Metadata({ data: "json, name=buckets" })
  buckets: string[];
}
