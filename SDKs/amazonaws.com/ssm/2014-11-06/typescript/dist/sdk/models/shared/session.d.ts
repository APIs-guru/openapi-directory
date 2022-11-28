import { SpeakeasyBase } from "../../../internal/utils";
import { SessionManagerOutputUrl } from "./sessionmanageroutputurl";
import { SessionStatusEnum } from "./sessionstatusenum";
/**
 * Information about a Session Manager connection to an instance.
**/
export declare class Session extends SpeakeasyBase {
    details?: string;
    documentName?: string;
    endDate?: Date;
    outputUrl?: SessionManagerOutputUrl;
    owner?: string;
    sessionId?: string;
    startDate?: Date;
    status?: SessionStatusEnum;
    target?: string;
}
