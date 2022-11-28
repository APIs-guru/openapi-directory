import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClickwrapsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetClickwrapsIdRequest extends SpeakeasyBase {
    pathParams: GetClickwrapsIdPathParams;
}
export declare class GetClickwrapsIdResponse extends SpeakeasyBase {
    clickwrapEntity?: shared.ClickwrapEntity;
    contentType: string;
    statusCode: number;
}
