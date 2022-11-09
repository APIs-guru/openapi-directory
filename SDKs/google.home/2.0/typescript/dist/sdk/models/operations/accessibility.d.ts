import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccessibilityRequest extends SpeakeasyBase {
    request: shared.AccessibilityRequest;
}
export declare class AccessibilityResponse extends SpeakeasyBase {
    contentType: string;
    getcurrentvalues?: shared.Getcurrentvalues;
    statusCode: number;
}
