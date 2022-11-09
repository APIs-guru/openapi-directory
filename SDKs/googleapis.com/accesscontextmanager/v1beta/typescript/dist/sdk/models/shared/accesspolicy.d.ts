import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization.
**/
export declare class AccessPolicy extends SpeakeasyBase {
    name?: string;
    parent?: string;
    title?: string;
}
