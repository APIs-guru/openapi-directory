import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFormFieldSetsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetFormFieldSetsIdRequest extends SpeakeasyBase {
    pathParams: GetFormFieldSetsIdPathParams;
}
export declare class GetFormFieldSetsIdResponse extends SpeakeasyBase {
    contentType: string;
    formFieldSetEntity?: shared.FormFieldSetEntity;
    statusCode: number;
}
