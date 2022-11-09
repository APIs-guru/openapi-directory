import { SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetUsersResponse extends SpeakeasyBase {
    data: User[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
