import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OmActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ommeters?: shared.Ommeters[];
}
