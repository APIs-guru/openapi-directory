import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchoolPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSchoolRequest extends SpeakeasyBase {
    pathParams: GetSchoolPathParams;
}
export declare class GetSchoolResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    schoolResponse?: shared.SchoolResponse;
    statusCode: number;
}
