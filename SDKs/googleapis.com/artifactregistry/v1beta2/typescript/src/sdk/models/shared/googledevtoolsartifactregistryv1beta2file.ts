import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Hash } from "./hash";


// GoogleDevtoolsArtifactregistryV1beta2File
/** 
 * Files store content that is potentially associated with Packages or Versions.
**/
export class GoogleDevtoolsArtifactregistryV1beta2File extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=hashes", elemType: shared.Hash })
  hashes?: Hash[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=sizeBytes" })
  sizeBytes?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
