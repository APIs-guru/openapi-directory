import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmailSendEmailStatementRequest extends SpeakeasyBase {
    request: shared.EmailStatementDto;
}
export declare class EmailSendEmailStatementResponse extends SpeakeasyBase {
    contentType: string;
    emailSendEmailStatement200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
