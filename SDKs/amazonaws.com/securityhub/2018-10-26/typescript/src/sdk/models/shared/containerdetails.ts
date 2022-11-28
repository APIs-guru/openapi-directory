import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerDetails
/** 
 * Container details related to a finding.
**/
export class ContainerDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageName" })
  imageName?: string;

  @SpeakeasyMetadata({ data: "json, name=LaunchedAt" })
  launchedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
