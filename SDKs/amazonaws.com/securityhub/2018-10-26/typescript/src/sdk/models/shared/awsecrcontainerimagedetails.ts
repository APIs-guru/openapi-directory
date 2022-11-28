import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcrContainerImageDetails
/** 
 * Information about an Amazon ECR image.
**/
export class AwsEcrContainerImageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Architecture" })
  architecture?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=ImagePublishedAt" })
  imagePublishedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageTags" })
  imageTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=RegistryId" })
  registryId?: string;

  @SpeakeasyMetadata({ data: "json, name=RepositoryName" })
  repositoryName?: string;
}
