import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// S3Reference
/** 
 * <p>Amazon S3 object representing the updated message content, in MIME format.</p> <note> <p>The region for the S3 bucket containing the S3 object must match the region used for WorkMail operations. Also, for WorkMail to process an S3 object, it must have permission to access that object. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> </note>
**/
export class S3Reference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
