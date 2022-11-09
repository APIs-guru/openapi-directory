import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NpmPackage
/** 
 * NpmPackage represents an npm artifact.
**/
export class NpmPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
