import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DockerImage
/** 
 * DockerImage represents a docker artifact. The following fields are returned as untyped metadata in the Version resource, using camelcase keys (i.e. metadata.imageSizeBytes): * imageSizeBytes * mediaType * buildTime
**/
export class DockerImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildTime" })
  buildTime?: string;

  @Metadata({ data: "json, name=imageSizeBytes" })
  imageSizeBytes?: string;

  @Metadata({ data: "json, name=mediaType" })
  mediaType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=uploadTime" })
  uploadTime?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
