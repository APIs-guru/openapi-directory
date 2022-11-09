import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetVenuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    venues?: shared.Venue[];
}
