import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members).
**/
export declare class Member extends SpeakeasyBase {
    deliverySettings?: string;
    email?: string;
    etag?: string;
    id?: string;
    kind?: string;
    role?: string;
    status?: string;
    type?: string;
}
