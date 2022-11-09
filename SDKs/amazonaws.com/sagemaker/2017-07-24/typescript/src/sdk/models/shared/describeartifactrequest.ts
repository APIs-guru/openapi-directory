import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeArtifactRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ArtifactArn" })
  artifactArn: string;
}
