import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Information about an instance of an AWS resource associated with a project.
**/
export declare class Resource extends SpeakeasyBase {
    arn?: string;
    attributes?: Map<string, string>;
    feature?: string;
    name?: string;
    type?: string;
}
