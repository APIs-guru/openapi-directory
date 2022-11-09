import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMeResponse extends SpeakeasyBase {
    contentType: string;
    meModel?: shared.MeModel;
    statusCode: number;
}
