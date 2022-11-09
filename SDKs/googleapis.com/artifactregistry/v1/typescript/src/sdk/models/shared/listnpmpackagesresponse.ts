import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NpmPackage } from "./npmpackage";


// ListNpmPackagesResponse
/** 
 * The response from listing npm packages.
**/
export class ListNpmPackagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=npmPackages", elemType: shared.NpmPackage })
  npmPackages?: NpmPackage[];
}
