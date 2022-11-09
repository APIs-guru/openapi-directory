import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerDetails
/** 
 * Container details related to a finding.
**/
export class ContainerDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageId" })
  imageId?: string;

  @Metadata({ data: "json, name=ImageName" })
  imageName?: string;

  @Metadata({ data: "json, name=LaunchedAt" })
  launchedAt?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
