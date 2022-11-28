import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NpmPackage } from "./npmpackage";



// ListNpmPackagesResponse
/** 
 * The response from listing npm packages.
**/
export class ListNpmPackagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=npmPackages", elemType: NpmPackage })
  npmPackages?: NpmPackage[];
}
