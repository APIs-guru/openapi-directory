import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExternalEventsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetExternalEventsIdRequest extends SpeakeasyBase {
    pathParams: GetExternalEventsIdPathParams;
}
export declare class GetExternalEventsIdResponse extends SpeakeasyBase {
    contentType: string;
    externalEventEntity?: shared.ExternalEventEntity;
    statusCode: number;
}
