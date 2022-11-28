import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerServiceLogEvent } from "./containerservicelogevent";
export declare class GetContainerLogResult extends SpeakeasyBase {
    logEvents?: ContainerServiceLogEvent[];
    nextPageToken?: string;
}
