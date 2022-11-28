import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PythonPackage } from "./pythonpackage";



// ListPythonPackagesResponse
/** 
 * The response from listing python packages.
**/
export class ListPythonPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=pythonPackages", elemType: PythonPackage })
  pythonPackages?: PythonPackage[];
}
