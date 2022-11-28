import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
**/
export declare class AttributesResource extends SpeakeasyBase {
    applicationId: string;
    attributeType: string;
    attributes?: string[];
}
