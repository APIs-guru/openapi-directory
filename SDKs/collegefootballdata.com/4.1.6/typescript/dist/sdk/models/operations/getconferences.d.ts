import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConferencesResponse extends SpeakeasyBase {
    conferences?: shared.Conference[];
    contentType: string;
    statusCode: number;
}
