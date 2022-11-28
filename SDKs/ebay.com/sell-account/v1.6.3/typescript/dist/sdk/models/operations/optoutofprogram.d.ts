import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OptOutOfProgramSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class OptOutOfProgramRequest extends SpeakeasyBase {
    request: shared.Program;
    security: OptOutOfProgramSecurity;
}
export declare class OptOutOfProgramResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    optOutOfProgram200ApplicationJsonObject?: Map<string, any>;
}
