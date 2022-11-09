import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class OrganizationModelHaljsonLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class OrganizationModelHaljson extends SpeakeasyBase {
    links?: OrganizationModelHaljsonLinks;
    name?: string;
    organizationId?: string;
}
