import { SpeakeasyBase } from "../../../internal/utils";
import { GrantStatusEnum } from "./grantstatusenum";
export declare class DeleteGrantResponse extends SpeakeasyBase {
    grantArn?: string;
    status?: GrantStatusEnum;
    version?: string;
}
