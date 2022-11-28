import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAutomationsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetAutomationsIdRequest extends SpeakeasyBase {
    pathParams: GetAutomationsIdPathParams;
}
export declare class GetAutomationsIdResponse extends SpeakeasyBase {
    automationEntity?: shared.AutomationEntity;
    contentType: string;
    statusCode: number;
}
