import { SpeakeasyBase } from "../../../internal/utils";
import { UserOutput } from "./user";
export declare class GetUserResponseOutput extends SpeakeasyBase {
    data: UserOutput;
    operation: string;
    resource: string;
    service: string;
    status: string;
    statusCode: number;
}
