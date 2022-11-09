import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PythonPackage
/** 
 * PythonPackage represents a python artifact.
**/
export class PythonPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
