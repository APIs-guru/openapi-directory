import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFormFieldSetsQueryParams extends SpeakeasyBase {
    cursor?: string;
    perPage?: number;
    userId?: number;
}
export declare class GetFormFieldSetsRequest extends SpeakeasyBase {
    queryParams: GetFormFieldSetsQueryParams;
}
export declare class GetFormFieldSetsResponse extends SpeakeasyBase {
    contentType: string;
    formFieldSetEntities?: shared.FormFieldSetEntity[];
    statusCode: number;
}
