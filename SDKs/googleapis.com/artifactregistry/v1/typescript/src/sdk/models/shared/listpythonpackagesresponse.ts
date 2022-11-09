import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PythonPackage } from "./pythonpackage";


// ListPythonPackagesResponse
/** 
 * The response from listing python packages.
**/
export class ListPythonPackagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=pythonPackages", elemType: shared.PythonPackage })
  pythonPackages?: PythonPackage[];
}
