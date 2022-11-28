import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DockerImage
/** 
 * DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime
**/
export class DockerImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildTime" })
  buildTime?: string;

  @SpeakeasyMetadata({ data: "json, name=imageSizeBytes" })
  imageSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaType" })
  mediaType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadTime" })
  uploadTime?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
