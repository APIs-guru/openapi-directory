import { SpeakeasyBase } from "../../../internal/utils";
export declare class TeamResponseOrganization extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare class TeamResponse extends SpeakeasyBase {
    description?: string;
    gid?: string;
    htmlDescription?: string;
    name?: string;
    organization?: TeamResponseOrganization;
    permalinkUrl?: string;
    resourceType?: string;
}
