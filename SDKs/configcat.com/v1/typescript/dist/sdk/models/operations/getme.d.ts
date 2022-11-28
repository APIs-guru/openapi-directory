import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeResponse extends SpeakeasyBase {
    contentType: string;
    meModel?: shared.MeModel;
    statusCode: number;
}
