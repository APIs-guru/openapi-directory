import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResourceInfo
/** 
 * A structure containing information about an AWS Lake Formation resource.
**/
export class ResourceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
