import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPlayTypesResponse extends SpeakeasyBase {
    contentType: string;
    playTypes?: shared.PlayType[];
    statusCode: number;
}
