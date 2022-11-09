import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPlayStatTypesResponse extends SpeakeasyBase {
    contentType: string;
    playStatTypes?: shared.PlayStatType[];
    statusCode: number;
}
