import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorProto } from "./errorproto";
export declare class JobStatus extends SpeakeasyBase {
    errorResult?: ErrorProto;
    errors?: ErrorProto[];
    state?: string;
}
