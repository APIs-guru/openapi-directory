import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OptInToProgramSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class OptInToProgramRequest extends SpeakeasyBase {
    request: shared.Program;
    security: OptInToProgramSecurity;
}
export declare class OptInToProgramResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    optInToProgram200ApplicationJsonObject?: Map<string, any>;
}
