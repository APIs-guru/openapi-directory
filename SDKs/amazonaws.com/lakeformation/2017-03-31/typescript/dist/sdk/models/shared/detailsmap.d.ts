import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A structure containing the additional details to be returned in the <code>AdditionalDetails</code> attribute of <code>PrincipalResourcePermissions</code>.</p> <p>If a catalog resource is shared through AWS Resource Access Manager (AWS RAM), then there will exist a corresponding RAM resource share ARN.</p>
**/
export declare class DetailsMap extends SpeakeasyBase {
    resourceShare?: string[];
}
