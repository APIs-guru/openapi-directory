import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PythonPackage
/** 
 * PythonPackage represents a python artifact.
**/
export class PythonPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
