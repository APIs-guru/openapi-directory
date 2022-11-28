import { SpeakeasyBase } from "../../../internal/utils";
import { UserRightsEnum } from "./userrightsenum";
export declare class MySqlUser extends SpeakeasyBase {
    enabled?: boolean;
    name?: string;
    rights?: UserRightsEnum;
}
