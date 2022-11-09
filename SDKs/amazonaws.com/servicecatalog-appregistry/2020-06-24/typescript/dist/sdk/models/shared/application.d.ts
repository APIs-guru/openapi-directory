import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents a Amazon Web Services Service Catalog AppRegistry application that is the top-level node in a hierarchy of related cloud resource abstractions.
**/
export declare class Application extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    description?: string;
    id?: string;
    lastUpdateTime?: Date;
    name?: string;
    tags?: Map<string, string>;
}
