import { SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";
export declare class GetUserResponse extends SpeakeasyBase {
    data: User;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
