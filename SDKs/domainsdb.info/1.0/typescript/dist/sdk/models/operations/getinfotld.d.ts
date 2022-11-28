import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInfoTldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    zoneInfos?: shared.ZoneInfo[];
}
