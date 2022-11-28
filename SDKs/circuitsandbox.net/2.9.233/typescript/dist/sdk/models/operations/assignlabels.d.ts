import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignLabelsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class AssignLabelsRequestBody extends SpeakeasyBase {
    labels: string[];
}
export declare class AssignLabelsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AssignLabelsRequest extends SpeakeasyBase {
    pathParams: AssignLabelsPathParams;
    request: AssignLabelsRequestBody;
    security: AssignLabelsSecurity;
}
export declare class AssignLabelsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    labelIds?: any[];
    statusCode: number;
}
