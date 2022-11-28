import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchoolForSectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSchoolForSectionRequest extends SpeakeasyBase {
    pathParams: GetSchoolForSectionPathParams;
}
export declare class GetSchoolForSectionResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    schoolResponse?: shared.SchoolResponse;
    statusCode: number;
}
