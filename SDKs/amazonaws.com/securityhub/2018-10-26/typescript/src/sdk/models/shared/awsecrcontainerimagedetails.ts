import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcrContainerImageDetails
/** 
 * Information about an Amazon ECR image.
**/
export class AwsEcrContainerImageDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Architecture" })
  architecture?: string;

  @Metadata({ data: "json, name=ImageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=ImagePublishedAt" })
  imagePublishedAt?: string;

  @Metadata({ data: "json, name=ImageTags" })
  imageTags?: string[];

  @Metadata({ data: "json, name=RegistryId" })
  registryId?: string;

  @Metadata({ data: "json, name=RepositoryName" })
  repositoryName?: string;
}
