import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PythonPackage } from "./pythonpackage";
/**
 * The response from listing python packages.
**/
export declare class ListPythonPackagesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    pythonPackages?: PythonPackage[];
}
