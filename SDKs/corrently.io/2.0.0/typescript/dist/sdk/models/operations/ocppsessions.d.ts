import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OcppSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    easeeChargers?: shared.EaseeCharger[];
}
