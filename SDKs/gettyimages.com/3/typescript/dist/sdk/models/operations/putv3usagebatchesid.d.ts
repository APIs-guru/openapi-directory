import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutV3UsageBatchesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutV3UsageBatchesIdRequest extends SpeakeasyBase {
    pathParams: PutV3UsageBatchesIdPathParams;
    request?: shared.ReportUsageBatchRequest;
}
export declare class PutV3UsageBatchesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reportUsageBatchResponse?: shared.ReportUsageBatchResponse;
}
