import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksListAnnotationsPathParams extends SpeakeasyBase {
    checkRunId: number;
    owner: string;
    repo: string;
}
export declare class ChecksListAnnotationsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ChecksListAnnotationsRequest extends SpeakeasyBase {
    pathParams: ChecksListAnnotationsPathParams;
    queryParams: ChecksListAnnotationsQueryParams;
}
export declare class ChecksListAnnotationsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    checkAnnotations?: shared.CheckAnnotation[];
}
