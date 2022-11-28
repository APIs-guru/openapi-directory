import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageVersion } from "./imageversion";



export class ListImageVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ImageVersions", elemType: ImageVersion })
  imageVersions?: ImageVersion[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
