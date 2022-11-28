import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about an application.
**/
export declare class ApplicationResponse extends SpeakeasyBase {
    arn: string;
    id: string;
    name: string;
    tags?: Map<string, string>;
}
