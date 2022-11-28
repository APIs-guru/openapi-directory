import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignLabelPathParams extends SpeakeasyBase {
    convId: string;
}
export declare class AssignLabelRequestBody extends SpeakeasyBase {
    label: string;
}
export declare class AssignLabelSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class AssignLabelRequest extends SpeakeasyBase {
    pathParams: AssignLabelPathParams;
    request: AssignLabelRequestBody;
    security: AssignLabelSecurity;
}
export declare class AssignLabelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    label?: any;
    statusCode: number;
}
