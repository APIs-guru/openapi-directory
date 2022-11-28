import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMailboxRequest extends SpeakeasyBase {
    request?: shared.CreateMailboxRequest;
}
export declare class CreateMailboxResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
