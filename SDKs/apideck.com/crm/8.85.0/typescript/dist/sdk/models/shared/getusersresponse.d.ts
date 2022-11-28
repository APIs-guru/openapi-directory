import { SpeakeasyBase } from "../../../internal/utils";
import { UserOutput } from "./user";
import { Links } from "./links";
import { Meta } from "./meta";
export declare class GetUsersResponseOutput extends SpeakeasyBase {
    data: UserOutput[];
    links?: Links;
    meta?: Meta;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
