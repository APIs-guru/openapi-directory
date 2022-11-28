import { SpeakeasyBase } from "../../../internal/utils";
import { Authentication } from "./authentication";
/**
 * You create users and assign them specific permissions by using an access string. You assign the users to Access Control Lists aligned with a specific role (administrators, human resources) that are then deployed to one or more MemoryDB clusters.
**/
export declare class User extends SpeakeasyBase {
    aclNames?: string[];
    arn?: string;
    accessString?: string;
    authentication?: Authentication;
    minimumEngineVersion?: string;
    name?: string;
    status?: string;
}
