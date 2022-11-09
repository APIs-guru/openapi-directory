import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageVersion } from "./imageversion";


export class ListImageVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ImageVersions", elemType: shared.ImageVersion })
  imageVersions?: ImageVersion[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
