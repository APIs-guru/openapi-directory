import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceInfo
/** 
 * A structure containing information about an AWS Lake Formation resource.
**/
export class ResourceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;
}
