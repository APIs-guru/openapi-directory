import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents a Amazon Web Services Service Catalog AppRegistry attribute group that is rich metadata which describes an application and its components.
**/
export declare class AttributeGroup extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    description?: string;
    id?: string;
    lastUpdateTime?: Date;
    name?: string;
    tags?: Map<string, string>;
}
