import { SpeakeasyBase } from "../../../internal/utils";
import { NpmPackage } from "./npmpackage";
/**
 * The response from listing npm packages.
**/
export declare class ListNpmPackagesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    npmPackages?: NpmPackage[];
}
