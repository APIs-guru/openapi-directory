import { SpeakeasyBase } from "../../../internal/utils";
import { GrantStatusEnum } from "./grantstatusenum";
export declare class CreateGrantResponse extends SpeakeasyBase {
    grantArn?: string;
    status?: GrantStatusEnum;
    version?: string;
}
