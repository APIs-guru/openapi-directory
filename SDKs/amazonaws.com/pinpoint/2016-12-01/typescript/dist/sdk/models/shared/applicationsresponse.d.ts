import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationResponse } from "./applicationresponse";
/**
 * Provides information about all of your applications.
**/
export declare class ApplicationsResponse extends SpeakeasyBase {
    item?: ApplicationResponse[];
    nextToken?: string;
}
