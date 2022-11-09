import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// S3Resource
/** 
 * Contains information about the S3 resource. This data type is used as a request parameter in the DisassociateS3Resources action and can be used as a response parameter in the AssociateS3Resources and UpdateS3Resources actions. 
**/
export class S3Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucketName" })
  bucketName: string;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;
}
