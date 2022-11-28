import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnassignLabelsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UnassignLabelsRequestBody extends SpeakeasyBase {
    labelIds: string[];
}
export declare class UnassignLabelsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UnassignLabelsRequest extends SpeakeasyBase {
    pathParams: UnassignLabelsPathParams;
    request: UnassignLabelsRequestBody;
    security: UnassignLabelsSecurity;
}
export declare class UnassignLabelsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    labelIds?: any[];
    statusCode: number;
}
