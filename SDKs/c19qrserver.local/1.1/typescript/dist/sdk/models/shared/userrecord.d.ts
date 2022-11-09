import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A team member user record
**/
export declare class UserRecord extends SpeakeasyBase {
    admin?: boolean;
    email?: string;
    id?: number;
    name?: string;
    readOnly?: boolean;
}
