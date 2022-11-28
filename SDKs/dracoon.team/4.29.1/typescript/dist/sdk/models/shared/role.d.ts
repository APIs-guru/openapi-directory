import { SpeakeasyBase } from "../../../internal/utils";
import { Right } from "./right";
/**
 * Role information
**/
export declare class Role extends SpeakeasyBase {
    description: string;
    id: number;
    items?: Right[];
    name: string;
}
