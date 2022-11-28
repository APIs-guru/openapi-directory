import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeArtifactRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ArtifactArn" })
  artifactArn: string;
}
