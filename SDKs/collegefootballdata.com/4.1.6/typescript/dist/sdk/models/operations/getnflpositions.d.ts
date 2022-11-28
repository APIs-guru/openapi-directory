import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNflPositionsResponse extends SpeakeasyBase {
    contentType: string;
    draftPositions?: shared.DraftPosition[];
    statusCode: number;
}
