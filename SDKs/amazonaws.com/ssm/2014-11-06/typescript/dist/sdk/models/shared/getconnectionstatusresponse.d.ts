import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStatusEnum } from "./connectionstatusenum";
export declare class GetConnectionStatusResponse extends SpeakeasyBase {
    status?: ConnectionStatusEnum;
    target?: string;
}
