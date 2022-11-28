import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains details about an organizational unit (OU). An OU is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.
**/
export declare class OrganizationalUnit extends SpeakeasyBase {
    arn?: string;
    id?: string;
    name?: string;
}
