import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOptedInProgramsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetOptedInProgramsRequest extends SpeakeasyBase {
    security: GetOptedInProgramsSecurity;
}
export declare class GetOptedInProgramsResponse extends SpeakeasyBase {
    contentType: string;
    programs?: shared.Programs;
    statusCode: number;
}
