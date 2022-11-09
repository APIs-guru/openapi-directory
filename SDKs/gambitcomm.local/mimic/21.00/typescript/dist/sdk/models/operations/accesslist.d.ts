import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccessListResponse extends SpeakeasyBase {
    accessEntries?: shared.AccessEntry[];
    contentType: string;
    statusCode: number;
}
