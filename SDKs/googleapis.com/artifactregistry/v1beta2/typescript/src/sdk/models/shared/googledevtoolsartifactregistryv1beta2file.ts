import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";



// GoogleDevtoolsArtifactregistryV1beta2File
/** 
 * Files store content that is potentially associated with Packages or Versions.
**/
export class GoogleDevtoolsArtifactregistryV1beta2File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=hashes", elemType: Hash })
  hashes?: Hash[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
